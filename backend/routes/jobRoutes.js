const express = require("express");

const router = express.Router();

const protect = require(
  "../middleware/auth"
);
const recruiterOnly = require("../middleware/recruiter");
const {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
  getMyJobs,
  getRecruiterDashboard,
} = require("../controllers/jobController");

// Public Routes

router.get("/", getJobs);
router.get(
  "/my-jobs",
  protect,
  getMyJobs
);


router.get(
  "/recruiter-dashboard",
  protect,
  recruiterOnly,
  getRecruiterDashboard
);

// Protected Route
router.post(
  "/create",
  protect,
  recruiterOnly,
  createJob
);


router.get("/:id", getJobById);
router.put(
  "/:id",
  protect,
  recruiterOnly,
  updateJob
);
router.delete(
  "/:id",
  protect,
  recruiterOnly,
  deleteJob
);

module.exports = router;