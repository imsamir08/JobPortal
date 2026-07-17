const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth");
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

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Get all jobs with
// search
// filter
// pagination
// sorting
router.get("/", getJobs);

// Get single job
router.get("/:id", getJobById);

/*
|--------------------------------------------------------------------------
| Recruiter Routes
|--------------------------------------------------------------------------
*/

// Create Job
router.post(
  "/create",
  protect,
  recruiterOnly,
  createJob
);

// Recruiter's jobs
router.get(
  "/my-jobs",
  protect,
  recruiterOnly,
  getMyJobs
);

// Recruiter dashboard
router.get(
  "/recruiter-dashboard",
  protect,
  recruiterOnly,
  getRecruiterDashboard
);

// Update Job
router.put(
  "/:id",
  protect,
  recruiterOnly,
  updateJob
);

// Delete Job
router.delete(
  "/:id",
  protect,
  recruiterOnly,
  deleteJob
);

module.exports = router;