const express = require("express");
const { addStudentToClass, getMyStudents, createAssignment, getSubmissions, gradeSubmission } = require("../controllers/teacherController");
const { protect, allowRoles } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/add-student", protect, allowRoles("teacher"), addStudentToClass);
router.get("/my-students", protect, allowRoles("teacher"), getMyStudents);
router.post("/assignment/create", protect, allowRoles("teacher"), createAssignment);
router.get("/assignment/:id/submissions", protect, allowRoles("teacher"), getSubmissions);
router.put("/submission/:id/grade", protect, allowRoles("teacher"), gradeSubmission);

module.exports = router;
