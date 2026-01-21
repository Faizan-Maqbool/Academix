const express = require("express");
const { addMarks } = require("../controllers/teacherController");
const { getMyMarks } = require("../controllers/studentController");
const { protect, allowRoles } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/add", protect, allowRoles("teacher"), addMarks);
router.get("/my", protect, allowRoles("student"), getMyMarks);

module.exports = router;
