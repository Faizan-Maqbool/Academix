const express = require("express");
const { createMeeting } = require("../controllers/teacherController");
const { protect, allowRoles } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/create", protect, allowRoles("teacher"), createMeeting);

module.exports = router;
