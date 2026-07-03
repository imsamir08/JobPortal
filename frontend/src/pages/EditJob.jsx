import {useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createJob } from "../services/jobService";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  getJobById,
  updateJob,
} from "../services/jobService";

function EditJob() {
    const navigate = useNavigate();
const { id } = useParams();
useEffect(() => {

  const fetchJob = async () => {

    try {

      const data =
        await getJobById(id);

      setJob({
        title: data.job.title || "",
        company: data.job.company || "",
        location: data.job.location || "",
        salary: data.job.salary || "",
        description:
          data.job.description || "",
      });

    } catch (error) {

      console.log(error);

    }

  };

  fetchJob();

}, [id]);

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
      await updateJob(id, job);

    toast.success(response.message);

    navigate("/jobs");

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Update Failed"
    );

  }

};
  return (
    <>
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-10">

        <div className="bg-white rounded-2xl border shadow-sm p-8">

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

            <button
              className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-6
                py-3
                rounded-lg
              "
            >
              Update Job
            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default EditJob;