const Leave = require("../models/Leave");

exports.applyLeave = async (req, res) => {
  const leave = await Leave.create({
    ...req.body,
    user: req.user.id,
  });

  res.json(leave);
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
