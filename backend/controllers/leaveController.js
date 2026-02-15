const Leave = require("../models/Leave");
const mongoose = require("mongoose");
exports.applyLeave = async (req, res) => {
  const leave = await Leave.create({
    ...req.body,
    user: req.user.id,
  });

  res.json(leave);
};

exports.leaveStats = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(400).json({ message: "User not found" });
    }

    const stats = await Leave.aggregate([
      {
        $match: {
          user: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    const formattedStats = {
      approved: 0,
      pending: 0,
      rejected: 0,
      totalLeaves: 0,
    };

    stats.forEach((item) => {
      const key = item._id.toLowerCase();
      formattedStats[key] = item.count;
      formattedStats.totalLeaves += item.count;
    });

    res.status(200).json(formattedStats);
  } catch (error) {
    console.error("Leave stats error:", error);
    res.status(500).json({ message: "Error fetching stats" });
  }
};

exports.getMyLeaves = async (req, res) => {
  const leaves = await Leave.find({ user: req.user.id });
  res.json(leaves);
};

exports.updateLeave = async (req, res) => {
  try {
    const leave = await Leave.findById(req.params.id);

    if (!leave) {
      return res.status(404).json({ message: "Leave not found" });
    }

    if (leave.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    if (leave.status !== "Pending") {
      return res.status(400).json({ message: "Cannot update processed leave" });
    }

    const { status, ...allowedUpdates } = req.body;

    Object.assign(leave, allowedUpdates);

    await leave.save();

    res.status(200).json({
      message: "Leave updated successfully",
      leave,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteLeave = async (req, res) => {
  const leave = await Leave.findById(req.params.id);

  if (!leave) {
    return res.status(404).json({ message: "Leave not found" });
  }

  if (leave.user.toString() !== req.user.id) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  if (leave.status !== "Pending")
    return res.status(400).json({ message: "Cannot delete" });

  await leave.deleteOne();
  res.json({ message: "Deleted" });
};
