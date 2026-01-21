const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverRole: { type: String, enum: ["student", "teacher", "admin"], required: true },
    classId: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
