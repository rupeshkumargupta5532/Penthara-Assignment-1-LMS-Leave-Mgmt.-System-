const express = require("express");
const {
  register,
  login,
  logout,
  refresh,
} = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

// Auth
router.post("/refresh", refresh);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", auth, logout);

module.exports = router;
