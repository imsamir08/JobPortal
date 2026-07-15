const Job = require("../models/Job");
const generateAIResponse = require("../services/geminiService");

const chatWithAI = async (req, res) => {
  try {
    const { jobId, message, type } = req.body;

    if (!jobId || !message) {
      return res.status(400).json({
        success: false,
        message: "jobId and message are required",
      });
    }

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    const prompt = `
You are an AI Job Assistant inside a job portal.

Your task is to help a candidate understand and prepare for a job.

Job Details:
Title: ${job.title}
Company: ${job.company}
Location: ${job.location}
Salary: ${job.salary}
Job Type: ${job.jobType}
Description: ${job.description}

User Request Type: ${type}
User Message: ${message}

Instructions:
- Give clear, short, structured answers.
- Keep language simple and helpful.
- If user asks for interview questions, give 8-10 relevant questions.
- If user asks for cover letter, write a short professional cover letter.
- If user asks for skills needed, list important technical and soft skills.
- If user asks to explain the job, summarize role, responsibilities, and expected skills in simple words.
`;

    const reply = await generateAIResponse(prompt);

    res.status(200).json({
      success: true,
      reply,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { chatWithAI };