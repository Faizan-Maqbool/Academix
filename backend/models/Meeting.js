const mongoose = require("mongoose");

const meetingSchema = mongoose.Schema(
  {
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    meetingLink: { type: String, required: true },
    scheduledAt: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Meeting", meetingSchema);
