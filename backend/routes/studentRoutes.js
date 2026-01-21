const express = require("express");
const { requestTeacher, getMyAssignments, submitAssignment } = require("../controllers/studentController");
const { protect, allowRoles } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/request-teacher", protect, allowRoles("student"), requestTeacher);
router.get("/assignments", protect, allowRoles("student"), getMyAssignments);
router.post("/assignment/submit", protect, allowRoles("student"), submitAssignment);

module.exports = router;
