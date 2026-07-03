const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
const path = require("path");

console.log(process.env.MONGO_URI);
// Connect Database
connectDB();

const authRoutes = require(
    "./routes/authRoutes"
);
const jobRoutes = require(
  "./routes/jobRoutes"
);
const applicationRoutes = require(
  "./routes/applicationRoutes"
);

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);
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