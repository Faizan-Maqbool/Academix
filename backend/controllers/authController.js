const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Notification = require("../models/Notification");

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  console.log("Registration attempt:", req.body);
  const { name, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      console.log("User already exists:", email);
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
      role,
      isApproved: role === "admin" ? true : false, // Both students and teachers need approval
    });

    if (user) {
      console.log("User created successfully:", user.email);

      // Create notification for admin if user is not admin
      if (user.role !== "admin") {
        await Notification.create({
          senderId: user._id,
          receiverRole: "admin",
          message: `New registration request from ${user.name} (${user.role})`,
        });
      }

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id, user.role),
      });
    } else {
      console.log("Invalid user data provided");
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      if ((user.role === "teacher" || user.role === "student") && !user.isApproved) {
        return res
          .status(401)
          .json({ message: "Account not yet approved by admin" });
      }

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id, user.role),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser };
