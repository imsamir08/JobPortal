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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Application",
  applicationSchema
);