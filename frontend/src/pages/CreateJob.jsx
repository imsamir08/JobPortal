import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createJob } from "../services/jobService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Button from "../components/Button";

function CreateJob() {
    const navigate = useNavigate();

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {
    const response =
      await createJob(job);
    toast.success(response.message);
    navigate("/jobs");

  } catch (error) {
    toast.error(
      error.response?.data?.message ||
      "Unable to create job"
    );
  }
};

  return (
    <>
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-10 flex justify-center">

        <div className="w-full max-w-4xl bg-white rounded-2xl border shadow-sm p-8 align-center">

          <h1 className="text-3xl font-bold">
            Create New Job
          </h1>

          <p className="text-gray-500 mt-2">
            Fill all details below.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 mt-8"
          >

            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={job.title}
              onChange={handleChange}
              className="w-full h-12 border rounded-lg px-4"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={job.company}
              onChange={handleChange}
              className="w-full h-12 border rounded-lg px-4"
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={job.location}
              onChange={handleChange}
              className="w-full h-12 border rounded-lg px-4"
            />

            <input
              type="text"
              name="salary"
              placeholder="Salary"
              value={job.salary}
              onChange={handleChange}
              className="w-full h-12 border rounded-lg px-4"
            />

            <textarea
              rows="6"
              name="description"
              placeholder="Job Description"
              value={job.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-4"
            />

            <Button
              variant="primary"
            >
              Create Job
            </Button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default CreateJob;