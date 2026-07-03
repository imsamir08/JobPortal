const upload = require("../middleware/upload");
const express = require("express");
const router = express.Router();

const protect = require(
  "../middleware/auth"
);

const {
  registerUser,
  loginUser,
  getMe,
  updateProfile,
  uploadResume,
} = require("../controllers/authController");

// Register Route

router.post(
  "/register",
  registerUser
);
router.post(
  "/login",
  loginUser
);
router.get("/me", protect, getMe);
router.put(
  "/update-profile",
  protect,
  updateProfile
);

router.put(
  "/upload-resume",
  protect,
  upload.single("resume"),
  uploadResume
);

module.exports = router;