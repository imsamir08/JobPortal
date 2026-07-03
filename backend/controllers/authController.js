const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Register User

const registerUser = async (req, res) => {
  try {

    const { name, email, password, role, } = req.body;

    // Validation

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check Existing User

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Create User
const hashedPassword = await bcrypt.hash(
  password,
  10
);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "candidate",
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

   res.status(200).json({
  success: true,
  message: "Login successful",
  token,
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    phone: user.phone,
    skills: user.skills,
    about: user.about,
    resume: user.resume,
  },
});

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Logged-in User Profile

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProfile = async (req, res) => {
  try {

    const {
      name,
      phone,
      skills,
      about,
    } = req.body;

    const updatedUser =
      await User.findByIdAndUpdate(
        req.user.id,
        {
          name,
          phone,
          skills,
          about,
        },
        {
          new: true,
        }
      ).select("-password");

    res.json({
      success: true,
      message: "Profile Updated Successfully",
      user: updatedUser,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Upload Resume

const uploadResume = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a resume",
      });
    }

    const resumePath = `/uploads/${req.file.filename}`;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        resume: resumePath,
      },
      {
        new: true,
      }
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Resume uploaded successfully",
      user: updatedUser,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  registerUser, loginUser, getMe, updateProfile, uploadResume,
};