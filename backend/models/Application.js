const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Applied",
        "Reviewing",
        "Interview",
        "Rejected",
        "Selected",
      ],
      default: "Applied",
    },

    recruiterNotes: {
      type: String,
      default: "",
      trim: true,
    },

    appliedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Prevent duplicate applications.
 * A user can apply only once for the same job.
 */
applicationSchema.index(
  {
    applicant: 1,
    job: 1,
  },
  {
    unique: true,
  }
);

module.exports = mongoose.model(
  "Application",
  applicationSchema
);