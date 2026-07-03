import { Link } from "react-router-dom";
import { applyForJob } from "../services/applicationService";
import toast from "react-hot-toast";

function JobCard({
    _id,
  title,
  company,
  location,
  salary,
}) {
    const handleApply = async () => {
  try {
    const response = await applyForJob(_id);
    toast.success(response.message);
  } catch (error) {
    toast.error(
      error.response?.data?.message ||
      "Application Failed"
    );
  }
};
  return (
    <div
      className="
      bg-white
      rounded-2xl
      border
      border-gray-200
      p-6
      shadow-sm
      hover:shadow-lg
      transition
      "
    >

      <div className="mb-4">

        <div
          className="
          w-12
          h-12
          rounded-xl
          bg-blue-100
          flex
          items-center
          justify-center
          text-blue-600
          font-bold
          "
        >
          {company[0]}
        </div>

      </div>

      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="text-gray-500 mt-2">
        {company}
      </p>

      <p className="text-gray-500">
        📍 {location}
      </p>

      <p className="text-blue-600 font-semibold mt-4">
        {salary}
      </p>

      <div className="flex gap-3 mt-6">

        <button
            onClick={handleApply}
          className="
          flex-1
          border
          rounded-lg
          py-2
          hover:bg-gray-50
          "
        >
            Apply Now
        </button>

        <Link
           to={`/jobs/${_id}`}
          className="
          flex-1
          text-center
          bg-blue-600
          text-white
          rounded-lg
          py-2
          hover:bg-blue-700
          "
        >
          Details
        </Link>

      </div>

    </div>
  );
}

export default JobCard;

// import { Link } from "react-router-dom";

// function JobCard({
//   title,
//   company,
//   location,
//   salary,
// }) {
//   return (
//     <div className="border rounded-2xl p-6 hover:shadow-lg transition">

//       <h2 className="text-xl font-bold">
//         {title}
//       </h2>

//       <p className="text-gray-600 mt-2">
//         {company}
//       </p>

//       <p className="text-gray-500 mt-2">
//         📍 {location}
//       </p>

//       <p className="font-semibold text-blue-600 mt-4">
//         {salary}
//       </p>

//       <Link
//         to={`/jobs/${title}`}
//         className="block text-center mt-5 bg-blue-600 text-white py-2 rounded-lg"
//       >
//         View Details
//       </Link>

//     </div>
//   );
// }

// export default JobCard;