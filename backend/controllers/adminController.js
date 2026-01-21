const User = require("../models/User");
const Class = require("../models/Class");

// @desc    Approve a user (Teacher or Student)
// @route   PUT /api/admin/approve-user/:id
// @access  Private (Admin)
const approveUser = async (req, res) => {
  console.log("Admin approval attempt for ID:", req.params.id);
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      console.log("User not found in DB");
      return res.status(404).json({ message: "User not found" });
    }

    if (user.role === "teacher" || user.role === "student") {
      user.isApproved = true;
      // Use markModified if password hashing is interfering, or use findByIdAndUpdate
      await User.findByIdAndUpdate(req.params.id, { isApproved: true });
      
      console.log(`User ${user.email} approved successfully`);
      res.json({ message: `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} approved` });
    } else {
      console.log("User role not eligible for approval:", user.role);
      res.status(400).json({ message: "User not eligible for approval" });
    }
  } catch (error) {
    console.error("Approval error details:", error);
    res.status(500).json({ message: `Internal Error: ${error.message}` });
  }
};

// @desc    Get all pending users (Teachers and Students)
// @route   GET /api/admin/pending-users
// @access  Private (Admin)
const getPendingUsers = async (req, res) => {
  try {
    const users = await User.find({ 
      role: { $in: ["teacher", "student"] }, 
      isApproved: false 
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a class
// @route   POST /api/admin/create-class
// @access  Private (Admin)
const createClass = async (req, res) => {
  const { className, teacherId, students } = req.body;

  try {
    const newClass = await Class.create({
      className,
      teacherId,
      students,
    });
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  approveUser,
  getPendingUsers,
  createClass,
};
