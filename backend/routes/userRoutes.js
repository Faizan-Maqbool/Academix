const express = require("express");
const { getTeachers, getStudents } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/teachers", protect, getTeachers);
router.get("/students", protect, getStudents);

module.exports = router;
