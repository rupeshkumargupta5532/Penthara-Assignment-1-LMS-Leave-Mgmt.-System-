const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    empId: { type: String, unique: true },
    password: String,
    department: String,
    role: {
      type: String,
      enum: ["admin", "employee"],
      default: "employee",
    },
    refreshToken: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
