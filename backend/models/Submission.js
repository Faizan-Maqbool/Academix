const mongoose = require("mongoose");

const submissionSchema = mongoose.Schema(
  {
    assignmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assignment",
      required: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    submissionLink: { type: String, required: true },
    status: { type: String, enum: ["Submitted", "Graded"], default: "Submitted" },
    obtainedMarks: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Submission", submissionSchema);
