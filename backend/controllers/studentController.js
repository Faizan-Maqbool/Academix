const Attendance = require("../models/Attendance");
const Marks = require("../models/Marks");
const Notification = require("../models/Notification");
const Assignment = require("../models/Assignment");
const Submission = require("../models/Submission");
const Class = require("../models/Class");

// @desc    Get my assignments
// @route   GET /api/student/assignments
// @access  Private (Student)
const getMyAssignments = async (req, res) => {
  try {
    // Find classes where student is enrolled
    const classes = await Class.find({ students: req.user._id });
    const classIds = classes.map(c => c._id);
    
    const assignments = await Assignment.find({ classId: { $in: classIds } }).populate("classId", "className");
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Submit an assignment
// @route   POST /api/student/assignment/submit
// @access  Private (Student)
const submitAssignment = async (req, res) => {
  const { assignmentId, submissionLink } = req.body;

  try {
    const submission = await Submission.create({
      assignmentId,
      studentId: req.user._id,
      submissionLink,
    });
    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Request to join a teacher's class
// @route   POST /api/student/request-teacher
// @access  Private (Student)
const requestTeacher = async (req, res) => {
  const { teacherId, message } = req.body;

  try {
    // Send a notification to the teacher
    await Notification.create({
      senderId: req.user._id,
      receiverRole: "teacher",
      message: `Student ${req.user.name} wants to join your class: ${message}`,
    });
    res.status(200).json({ message: "Request sent to teacher" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get my attendance
// @route   GET /api/attendance/my
// @access  Private (Student)
const getMyAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({ studentId: req.user._id }).populate("classId", "className");
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get my marks
// @route   GET /api/marks/my
// @access  Private (Student)
const getMyMarks = async (req, res) => {
  try {
    const marks = await Marks.find({ studentId: req.user._id }).populate({
      path: "testId",
      populate: { path: "classId", select: "className" }
    });
    res.json(marks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMyAttendance,
  getMyMarks,
  requestTeacher,
  getMyAssignments,
  submitAssignment,
};
