const Attendance = require("../models/Attendance");
const Marks = require("../models/Marks");
const Test = require("../models/Test");
const Notification = require("../models/Notification");
const Meeting = require("../models/Meeting");
const Class = require("../models/Class");
const User = require("../models/User");
const Assignment = require("../models/Assignment");
const Submission = require("../models/Submission");

// @desc    Get all submissions for an assignment
// @route   GET /api/teacher/assignment/:id/submissions
// @access  Private (Teacher)
const getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find({ assignmentId: req.params.id }).populate("studentId", "name email");
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Grade a submission
// @route   PUT /api/teacher/submission/:id/grade
// @access  Private (Teacher)
const gradeSubmission = async (req, res) => {
  const { obtainedMarks } = req.body;

  try {
    const submission = await Submission.findById(req.params.id).populate("assignmentId");
    if (!submission) return res.status(404).json({ message: "Submission not found" });

    submission.obtainedMarks = obtainedMarks;
    submission.status = "Graded";
    await submission.save();

    // Notify student
    await Notification.create({
      senderId: req.user._id,
      receiverRole: "student",
      message: `Your assignment ${submission.assignmentId.title} has been graded: ${obtainedMarks}/${submission.assignmentId.marks}`,
    });

    res.json(submission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new assignment
// @route   POST /api/teacher/assignment/create
// @access  Private (Teacher)
const createAssignment = async (req, res) => {
  const { classId, title, description, dueDate, marks } = req.body;

  try {
    const assignment = await Assignment.create({
      classId,
      title,
      description,
      dueDate,
      marks,
    });

    // Notify students in class
    const cls = await Class.findById(classId);
    if (cls) {
      await Notification.create({
        senderId: req.user._id,
        receiverRole: "student",
        classId,
        message: `New assignment: ${title}. Due: ${new Date(dueDate).toLocaleDateString()}`,
      });
    }

    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add a student to teacher's class
// @route   POST /api/teacher/add-student
// @access  Private (Teacher)
const addStudentToClass = async (req, res) => {
  const { studentId, className } = req.body;

  try {
    let cls = await Class.findOne({ teacherId: req.user._id, className });

    if (!cls) {
      cls = await Class.create({
        className,
        teacherId: req.user._id,
        students: [studentId],
      });
    } else {
      if (cls.students.includes(studentId)) {
        return res.status(400).json({ message: "Student already in class" });
      }
      cls.students.push(studentId);
      await cls.save();
    }

    // Notify student
    await Notification.create({
      senderId: req.user._id,
      receiverRole: "student",
      message: `You have been added to ${className} by ${req.user.name}`,
    });

    res.status(200).json(cls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get teacher's students
// @route   GET /api/teacher/my-students
// @access  Private (Teacher)
const getMyStudents = async (req, res) => {
  try {
    const classes = await Class.find({ teacherId: req.user._id }).populate("students", "name email");
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Mark attendance for a student
// @route   POST /api/attendance/mark
// @access  Private (Teacher)
const markAttendance = async (req, res) => {
  const { classId, studentId, date, status } = req.body;

  try {
    const attendance = await Attendance.create({
      classId,
      studentId,
      date,
      status,
    });
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add marks for a student
// @route   POST /api/marks/add
// @access  Private (Teacher)
const addMarks = async (req, res) => {
  const { testId, studentId, obtainedMarks } = req.body;

  try {
    const marks = await Marks.create({
      testId,
      studentId,
      obtainedMarks,
    });
    res.status(201).json(marks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new test
// @route   POST /api/tests/create
// @access  Private (Teacher)
const createTest = async (req, res) => {
  const { classId, title, totalMarks, date } = req.body;

  try {
    const test = await Test.create({
      classId,
      title,
      totalMarks,
      date,
    });
    res.status(201).json(test);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Send broadcast notification
// @route   POST /api/notification/broadcast
// @access  Private (Teacher)
const broadcastNotification = async (req, res) => {
  const { receiverRole, classId, message } = req.body;

  try {
    const notification = await Notification.create({
      senderId: req.user._id,
      receiverRole,
      classId,
      message,
    });
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Schedule a meeting
// @route   POST /api/meeting/create
// @access  Private (Teacher)
const createMeeting = async (req, res) => {
  const { classId, meetingLink, scheduledAt } = req.body;

  try {
    const meeting = await Meeting.create({
      classId,
      teacherId: req.user._id,
      meetingLink,
      scheduledAt,
    });
    res.status(201).json(meeting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  markAttendance,
  addMarks,
  createTest,
  broadcastNotification,
  createMeeting,
  addStudentToClass,
  getMyStudents,
  createAssignment,
  getSubmissions,
  gradeSubmission,
};
