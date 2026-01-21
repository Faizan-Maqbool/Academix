const express = require("express");
const { broadcastNotification } = require("../controllers/teacherController");
const { getMyNotifications } = require("../controllers/notificationController");
const { protect, allowRoles } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/broadcast", protect, allowRoles("teacher"), broadcastNotification);
router.get("/my", protect, getMyNotifications);

module.exports = router;
