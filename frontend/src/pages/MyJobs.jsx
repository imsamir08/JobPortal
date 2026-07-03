import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";
import { Link } from "react-router-dom";

import {
  getMyJobs,
} from "../services/jobService";

function MyJobs() {

  const [jobs, setJobs] =
    useState([]);

  useEffect(() => {

    const fetchJobs = async () => {

      try {

        const data =
          await getMyJobs();

        setJobs(data.jobs);

      } catch (error) {

        console.log(error);

      }

    };

    fetchJobs();

  }, []);

  return (

    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold mb-8">
          My Posted Jobs
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          {jobs.map((job) => (

  <div
    key={job._id}
    className="space-y-3"
  >

    <JobCard
      _id={job._id}
      title={job.title}
      company={job.company}
      location={job.location}
      salary={job.salary}
    />

    <Link
      to={`/applicants/${job._id}`}
      className="
        block
        text-center
        bg-green-600
        hover:bg-green-700
        text-white
        py-3
        rounded-xl
      "
    >
      View Applicants
    </Link>

  </div>

))}
        </div>
      </section>
      <Footer />

    </>
  );
}

export default MyJobs;