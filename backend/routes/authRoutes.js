const express = require("express");
const {
  register,
  login,
  logout,
  refresh,
  getMe,
} = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");
const { leaveStats } = require("../controllers/leaveController");
const router = express.Router();

// Auth
router.post("/refresh", refresh);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", auth, logout);
router.get("/stats", auth, leaveStats);
router.get("/me", auth, getMe);

module.exports = router;
