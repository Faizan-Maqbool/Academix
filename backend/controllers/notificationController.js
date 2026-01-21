const Notification = require("../models/Notification");

// @desc    Get notifications for the logged-in user's role
// @route   GET /api/notification/my
// @access  Private
const getMyNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({
      receiverRole: req.user.role
    }).populate("senderId", "name email role").populate("classId", "className");
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getMyNotifications };
