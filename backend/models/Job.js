const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    companyLogo: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    remoteType: {
      type: String,
      enum: ["Onsite", "Remote", "Hybrid"],
      default: "Onsite",
    },

    jobType: {
      type: String,
      enum: [
        "Full Time",
        "Part Time",
        "Internship",
        "Contract",
        "Freelance",
      ],
      default: "Full Time",
    },

    category: {
      type: String,
      default: "Software Development",
    },

    experience: {
      type: String,
      default: "0-2 Years",
    },

    salary: {
      type: String,
      required: true,
    },

    skills: [
      {
        type: String,
      },
    ],

    benefits: [
      {
        type: String,
      },
    ],

    description: {
      type: String,
      required: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Faster searching
jobSchema.index({
  title: "text",
  company: "text",
  description: "text",
});

module.exports = mongoose.model("Job", jobSchema);