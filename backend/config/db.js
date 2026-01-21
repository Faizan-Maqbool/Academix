const mongoose = require("mongoose");
const User = require("../models/User");

const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    const maskedURI = process.env.MONGODB_URI.replace(/:([^@]+)@/, ":****@");
    console.log(`Connecting to: ${maskedURI}`);
    
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Automatically create admin account if it doesn't exist
    const adminEmail = "faizanmaqbool046@gmail.com";
    const adminExists = await User.findOne({ email: adminEmail });

    if (!adminExists) {
      await User.create({
        name: "Super Admin",
        email: adminEmail,
        password: "Ali@bilal1",
        role: "admin",
        isApproved: true,
      });
      console.log("Admin account created successfully");
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
