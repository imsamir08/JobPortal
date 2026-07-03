import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import {
  getAllJobs,
} from "../services/jobService";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] =
    useState("");

  const [jobType, setJobType] =
    useState("");

  useEffect(() => {
    const fetchJobs = async () => {

      try {

        const data =
          await getAllJobs(keyword, location, jobType);

        setJobs(data.jobs);

      } catch (error) {

        console.log(error);

      }

    };

    fetchJobs();

  }, [keyword, location, jobType]);
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-10">

        {/* Search */}
        <div className="mb-8">

          <input
            type="text"
            placeholder="Search jobs..."
            value={keyword}
            onChange={(e) =>
              setKeyword(e.target.value)
            }
            className="
              w-full
              h-12
              border
              rounded-xl
              px-4
              
            "
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">

          <select
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
            className="
            h-12
            border
            rounded-lg
            px-4
          "
          >

            <option value="">
              All Locations
            </option>

            <option>
              Bangalore
            </option>

            <option>
              Kolkata
            </option>

            <option>
              Hyderabad
            </option>

            <option>
              Pune
            </option>

          </select>

          <select
            value={jobType}
            onChange={(e) =>
              setJobType(e.target.value)
            }
            className="
              h-12
              border
              rounded-lg
              px-4
            "
          >

            <option value="">
              All Job Types
            </option>

            <option>
              Full Time
            </option>

            <option>
              Remote
            </option>

            <option>
              Internship
            </option>

          </select>

        </div>

<div className="grid md:grid-cols-4 gap-8 max-w-10xl mx-auto mt-8">
          {/* Sidebar */}
          <div>
            <Sidebar />
          </div>

          {/* Jobs */}
          <div className="md:col-span-3">
            <h1 className="text-3xl font-bold mb-6">
              Available Jobs
            </h1>

            <div className="grid md:grid-cols-2 gap-6">

              {jobs.map((job) => (
                <JobCard
                  key={job._id}
                  _id={job._id}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  salary={job.salary}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Jobs;