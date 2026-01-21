const mongoose = require("mongoose");

const marksSchema = mongoose.Schema(
  {
    testId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Test",
      required: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    obtainedMarks: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Marks", marksSchema);
