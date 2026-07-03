const express = require("express");
const router = express.Router();
const protect = require(
  "../middleware/auth"
);

const {
  applyJob,
  getMyApplications,
  getApplicants,
  updateApplicationStatus,
} = require(
  "../controllers/applicationController"
);

router.post(
  "/apply/:jobId",
  protect,
  applyJob
);

router.get(
  "/my-applications",
  protect,
  getMyApplications
);

router.get(
  "/job/:jobId",
  protect,
  getApplicants
);
router.put(
  "/status/:id",
  protect,
  updateApplicationStatus
);
module.exports = router;