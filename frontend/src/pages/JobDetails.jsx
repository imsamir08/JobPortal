import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Button from "../components/Button";


import {
  getJobById,
  deleteJob,
} from "../services/jobService";
import toast from "react-hot-toast";

function JobDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data =
          await getJobById(id);
        setJob(data.job);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />

        <section className="max-w-6xl mx-auto py-20 text-center">
          <Loader />
        </section>

        <Footer />
      </>
    );

  }

  if (!job) {
    return (
      <>
        <Navbar />

        <section className="max-w-6xl mx-auto py-20 text-center">
          Job Not Found
        </section>

        <Footer />
      </>
    );
  }

  const handleDelete = async () => {

  const confirmDelete =
    window.confirm(
      "Are you sure you want to delete this job?"
    );

  if (!confirmDelete) return;

  try {

    const response =
      await deleteJob(job._id);

    toast.success(response.message);

    navigate("/jobs");

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Delete Failed"
    );

  }

};

  return (
    <>
      <Navbar />
      <section className="max-w-10xl mx-auto px-6 py-6">

        <div className="bg-white border rounded-2xl shadow-sm p-8">

          <h1 className="text-4xl font-bold">
            {job.title}
          </h1>

          <p className="text-gray-600 mt-3">
            {job.company}
            {" • "}
            {job.location}
            {" • "}
            {job.jobType}
          </p>

                    

           <div className="flex flex-wrap gap-4 mt-6">
            <Button variant="primary">
              Apply Now
            </Button>

            <Button variant="secondary">
              Save Job
            </Button>

            <Link to={`/edit-job/${job._id}`}>
              <Button variant="warning">
                Edit Job
              </Button>
            </Link>

            <Button
              variant="danger"
              onClick={handleDelete}
            >
              Delete Job
            </Button>
          </div>
          
        </div>

        <div className="mt-8 bg-white border rounded-2xl shadow-sm p-8">

          <h2 className="text-2xl font-bold">
            Salary
          </h2>

          <p className="mt-3">
            {job.salary}
          </p>

          <h2 className="text-2xl font-bold mt-8">
            Description
          </h2>

          <p className="text-gray-600 leading-8 mt-3">
            {job.description}
          </p>

        </div>
      </section>
      <Footer />
    </>
  );
}

export default JobDetails;

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { Link } from "react-router-dom";
// function JobDetails() {

//   return (
//     <>
//       <Navbar />

//       <section className="max-w-5xl mx-auto px-6 py-10">

//         <div className="bg-white border rounded-2xl shadow-sm p-8">

//           <div className="flex justify-between items-start">

//             <div>

//               <h1 className="text-4xl font-bold">
//                 Software Engineer
//               </h1>

//               <p className="text-gray-500 mt-3">
//                 Google • Bangalore
//               </p>

//             </div>

//             <button
//               className="
//               bg-blue-600
//               text-white
//               px-6
//               py-3
//               rounded-lg
//               "
//             >
//               Apply Now
//             </button>

//           </div>

//           <hr className="my-8"/>

//           <div className="space-y-6">

//             <div>

//               <h2 className="text-2xl font-bold mb-2">
//                 Salary
//               </h2>

//               <p>
//                 ₹18 LPA
//               </p>

//             </div>

//             <div>

//               <h2 className="text-2xl font-bold mb-2">
//                 Job Description
//               </h2>

//               <p>
//                 Description will come from MongoDB.
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       <Footer />
//     </>
//   );

// }

// export default JobDetails;