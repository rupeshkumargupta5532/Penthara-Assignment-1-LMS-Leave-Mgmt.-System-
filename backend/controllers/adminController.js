const Leave = require("../models/Leave");
const User = require("../models/User");
const LeaveHistory = require("../models/LeaveHistory");
const bcrypt = require("bcryptjs");

exports.getAllLeaves = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const total = await Leave.countDocuments();

  const leaves = await Leave.find()
    .populate("user", "name empId department")
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ createdAt: -1 });

  res.json({
    total,
    page,
    pages: Math.ceil(total / limit),
    data: leaves,
  });
};

exports.updateLeaveStatus = async (req, res) => {
  const leave = await Leave.findById(req.params.id);

  leave.status = req.body.status;
  await leave.save();

  await LeaveHistory.create({
    leaveId: leave._id,
    action: req.body.status,
    performedBy: req.user.id,
  });

  res.json(leave);
};

exports.dashboardStats = async (req, res) => {
  const stats = await Leave.aggregate([
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  res.json(stats);
};

exports.searchUsers = async (req, res) => {
  const users = await User.find({
    $or: [
      { name: { $regex: req.query.q, $options: "i" } },
      { empId: { $regex: req.query.q, $options: "i" } },
    ],
  });

  res.json(users);
};

exports.getAllUsers = async (req, res) => {
  const page = +req.query.page || 1;
  const limit = +req.query.limit || 10;

  const total = await User.countDocuments();

  const users = await User.find()
    .skip((page - 1) * limit)
    .limit(limit);

  res.json({
    totalUsers: total,
    page,
    totalPages: Math.ceil(total / limit),
    data: users,
  });
};

exports.createUserByAdmin = async (req, res) => {
  try {
    const { name, email, password, empId, department, role } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      empId,
      department,
      password: hashed,
      role, // admin can assign role
    });

    res.status(201).json(user);
  } catch (error) {
    console.log(error?.message);
    res.status(500).json({ message: "Error creating user" });
  }
};

exports.departmentAnalytics = async (req, res) => {
  const stats = await Leave.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "userData",
      },
    },
    { $unwind: "$userData" },
    {
      $group: {
        _id: "$userData.department",
        totalLeaves: { $sum: 1 },
        approved: {
          $sum: {
            $cond: [{ $eq: ["$status", "Approved"] }, 1, 0],
          },
        },
        rejected: {
          $sum: {
            $cond: [{ $eq: ["$status", "Rejected"] }, 1, 0],
          },
        },
        pending: {
          $sum: {
            $cond: [{ $eq: ["$status", "Pending"] }, 1, 0],
          },
        },
      },
    },
  ]);

  res.json(stats);
};

exports.filterLeaves = async (req, res) => {
  try {
    const { status, page = 1, limit = 10, department } = req.query;

    const matchStage = {};

    if (status) {
      matchStage.status = status;
    }

    const pipeline = [
      { $match: matchStage },

      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "userData",
        },
      },
      { $unwind: "$userData" },
    ];

    if (department) {
      pipeline.push({
        $match: { "userData.department": department },
      });
    }

    pipeline.push(
      { $sort: { createdAt: -1 } },
      { $skip: (page - 1) * limit },
      { $limit: Number(limit) },
    );

    const leaves = await Leave.aggregate(pipeline);

    const total = await Leave.countDocuments(matchStage);

    res.json({
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      data: leaves,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
