const Application = require(
  "../models/Application"
);

// Apply Job

const applyJob = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const userId = req.user.id;
    const alreadyApplied =
      await Application.findOne({
        applicant: userId,
        job: jobId,
      });

    if (alreadyApplied) {
      return res.status(400).json({
        success: false,
        message:
          "Already applied for this job",
      });
    }

    const application =
      await Application.create({
        applicant: userId,
        job: jobId,
      });

    res.status(201).json({
      success: true,
      message:
        "Application submitted",
      application,
    });

  } catch (error) {
 console.log("Apply Job Error:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// My Applications

const getMyApplications =
  async (req, res) => {
    try {

      const applications =
        await Application.find({
          applicant: req.user.id,
        })
          .populate("job")
          .sort({ createdAt: -1 });

      res.json({
        success: true,
        applications,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }
  };

// Get Applicants For A Job

const getApplicants = async (req, res) => {

  try {

    const applications =
      await Application.find({
        job: req.params.jobId,
      })

      .populate(
        "applicant",
        "name email phone skills resume"
      )

      .sort({
        createdAt: -1,
      });

    res.json({
      success: true,
      applications,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};  
// Update Application Status

const updateApplicationStatus =
  async (req, res) => {

    try {

      const application =
        await Application.findById(
          req.params.id
        );

      if (!application) {

        return res.status(404).json({
          success: false,
          message:
            "Application not found",
        });

      }

      application.status =
        req.body.status;

      await application.save();

      res.json({
        success: true,
        message:
          "Status Updated Successfully",
        application,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });

    }

};

module.exports = {
  applyJob,
  getMyApplications,
  getApplicants,
  updateApplicationStatus,
};