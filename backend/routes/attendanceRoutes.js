const express = require("express");
const { markAttendance } = require("../controllers/teacherController");
const { getMyAttendance } = require("../controllers/studentController");
const { protect, allowRoles } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/mark", protect, allowRoles("teacher"), markAttendance);
router.get("/my", protect, allowRoles("student"), getMyAttendance);

module.exports = router;
