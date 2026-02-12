const express = require("express");
const auth = require("..//middleware/authMiddleware");
const {
  applyLeave,
  getMyLeaves,
  updateLeave,
  deleteLeave,
} = require("../controllers/leaveController");

const router = express.Router();

router.post("/", auth, applyLeave);
router.get("/my", auth, getMyLeaves);
router.put("/:id", auth, updateLeave);
router.delete("/:id", auth, deleteLeave);

module.exports = router;
