const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");

const app = express();

// Connect Database
connectDB();

// CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://job-portal-iota-pink.vercel.app",
  "https://job-portal-imsamir08s-projects.vercel.app",
  "https://job-portal-git-main-imsamir08s-projects.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Static uploads folder
app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Job Portal API Running",
  });
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});