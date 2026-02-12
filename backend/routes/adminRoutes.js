const {
  getAllLeaves,
  updateLeaveStatus,
  dashboardStats,
  searchUsers,
  departmentAnalytics,
  createUserByAdmin,
  getAllUsers,
  filterLeaves,
} = require("../controllers/adminController");
const role = require("../middleware/roleMiddleware");
const express = require("express");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Admin
router.get("/leaves", auth, role("admin"), getAllLeaves);
router.put("/leave/:id", auth, role("admin"), updateLeaveStatus);
router.get("/dashboard", auth, role("admin"), dashboardStats);
router.get("/users/search", auth, role("admin"), searchUsers);
router.get("/users", auth, role("admin"), getAllUsers);
router.post("/create-user", auth, role("admin"), createUserByAdmin);
router.get("/department-analytics", auth, role("admin"), departmentAnalytics);
router.get("/leaves/filter", auth, role("admin"), filterLeaves);

module.exports = router;
