const User = require("../models/User");

// @desc    Get all teachers
// @route   GET /api/users/teachers
// @access  Private
const getTeachers = async (req, res) => {
  try {
    const teachers = await User.find({ role: "teacher", isApproved: true }).select("name email");
    console.log(`Found ${teachers.length} approved teachers`);
    res.json(teachers);
  } catch (error) {
    console.error("Error fetching teachers:", error);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all students
// @route   GET /api/users/students
// @access  Private
const getStudents = async (req, res) => {
  try {
    const students = await User.find({ role: "student", isApproved: true }).select("name email");
    console.log(`Found ${students.length} approved students`);
    res.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTeachers, getStudents };
