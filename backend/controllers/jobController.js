const Job = require("../models/Job");
const Application = require("../models/Application");
// Create Job

const createJob = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      salary,
      description,
      jobType,
    } = req.body;

    const job = await Job.create({
      title,
      company,
      location,
      salary,
      description,
      jobType,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      job,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get All Jobs + Search
// Get All Jobs (Search + Filter + Pagination + Sorting)

const getJobs = async (req, res) => {
  try {
    const {
      search = "",
      location = "",
      jobType = "",
      sort = "latest",
      page = 1,
      limit = 9,
    } = req.query;

    const query = {};

    // Search
    if (search.trim()) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
      ];
    }

    // Location Filter
    if (location.trim()) {
      query.location = {
        $regex: location,
        $options: "i",
      };
    }

    // Job Type Filter
    if (jobType.trim()) {
      query.jobType = jobType;
    }

    // Sorting
    let sortOption = {};

    switch (sort) {
      case "oldest":
        sortOption = { createdAt: 1 };
        break;

      case "salary-low":
        sortOption = { salary: 1 };
        break;

      case "salary-high":
        sortOption = { salary: -1 };
        break;

      case "company":
        sortOption = { company: 1 };
        break;

      default:
        sortOption = { createdAt: -1 };
    }

    const currentPage = Number(page);
    const pageSize = Number(limit);

    const skip = (currentPage - 1) * pageSize;

    const [jobs, totalJobs] = await Promise.all([
      Job.find(query)
        .sort(sortOption)
        .skip(skip)
        .limit(pageSize),

      Job.countDocuments(query),
    ]);

    const totalPages = Math.ceil(totalJobs / pageSize);

    res.status(200).json({
      success: true,

      jobs,

      pagination: {
        page: currentPage,
        limit: pageSize,
        totalJobs,
        totalPages,
        hasNext: currentPage < totalPages,
        hasPrev: currentPage > 1,
      },

      filters: {
        search,
        location,
        jobType,
        sort,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Job

const getJobById = async (req, res) => {
  try {

    const job = await Job.findById(
      req.params.id
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.json({
      success: true,
      job,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// Update Job

const updateJob = async (req, res) => {

  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    job.title = req.body.title || job.title;
    job.company = req.body.company || job.company;
    job.location = req.body.location || job.location;
    job.salary = req.body.salary || job.salary;
    job.description =
      req.body.description || job.description;

    const updatedJob = await job.save();

    res.json({
      success: true,
      message: "Job Updated Successfully",
      job: updatedJob,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// Delete Job

const deleteJob = async (req, res) => {

  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    await Job.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Job Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};
// Get Jobs Created By Logged-in Recruiter

const getMyJobs = async (req, res) => {
  try {

    const jobs = await Job.find({
      createdBy: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      jobs,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

const getRecruiterDashboard = async (req, res) => {
  try {
    // all jobs created by logged-in recruiter
    const jobs = await Job.find({
      createdBy: req.user.id,
    }).select("_id title company location createdAt");

    const jobIds = jobs.map((job) => job._id);

    // all applications on recruiter's jobs
    const applications = await Application.find({
      job: { $in: jobIds },
    })
      .populate("applicant", "name email")
      .populate("job", "title company location")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      totalJobs: jobs.length,
      totalApplicants: applications.length,
      jobs,
      applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
  getMyJobs,
  getRecruiterDashboard,
};