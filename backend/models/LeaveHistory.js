const mongoose = require("mongoose");

const leaveHistorySchema = new mongoose.Schema(
  {
    leaveId: { type: mongoose.Schema.Types.ObjectId, ref: "Leave" },
    action: String,
    performedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("LeaveHistory", leaveHistorySchema);
