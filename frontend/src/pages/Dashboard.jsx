import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getMyProfile } from "../services/authService";
import { getMyApplications } from "../services/applicationService";
import { Link } from "react-router-dom";
import DashboardStatCard from "../components/DashboardStatCard";
import Loader from "../components/Loader";
import { getRecruiterDashboard } from "../services/jobService";
function Dashboard() {
  // Store logged-in user profile
  const [user, setUser] = useState(null);

  // Store all applications of logged-in user
  const [applications, setApplications] = useState([]);
  const [recruiterStats, setRecruiterStats] = useState({
    totalJobs: 0,
    totalApplicants: 0,
    applications: [],
  });

  // Loading state for page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const profileRes = await getMyProfile();
        setUser(profileRes.user);

        // candidate dashboard
        if (profileRes.user.role === "candidate") {
          const applicationRes = await getMyApplications();
          setApplications(applicationRes.applications || []);
        }

        // recruiter dashboard
        if (profileRes.user.role === "recruiter") {
          const recruiterRes = await getRecruiterDashboard();

          setRecruiterStats({
            totalJobs: recruiterRes.totalJobs || 0,
            totalApplicants: recruiterRes.totalApplicants || 0,
            applications: recruiterRes.applications || [],
          });
        }
      } catch (error) {
        console.log("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Total number of applications
  const totalApplications = applications.length;

  // Count applications by status
  const reviewingCount = applications.filter(
    (app) => app.status === "Reviewing"
  ).length;

  const selectedCount = applications.filter(
    (app) => app.status === "Selected"
  ).length;

  // rec stats
  const totalJobsPosted = recruiterStats.totalJobs;
  const totalApplicants = recruiterStats.totalApplicants;
  const recentRecruiterApplications =
    recruiterStats.applications;

  if (loading) {
    return (
      <>
        <Navbar />
        <section className="max-w-7xl mx-auto px-6 py-10">
          <Loader />
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="max-w-10xl mx-auto px-6 py-10">
        {/* Page Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome Back,
            <span className="text-blue-600">
              {" "}
              {user?.name}
            </span>
            👋
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your profile and track your job applications.
          </p>

        </div>

        {/* Top Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          {user?.role === "candidate" ? (
            <>
              <DashboardStatCard
                title="Total Applications"
                value={totalApplications}
                color="text-blue-600"
              />

              <DashboardStatCard
                title="Under Review"
                value={reviewingCount}
                color="text-yellow-500"
              />

              <DashboardStatCard
                title="Selected"
                value={selectedCount}
                color="text-green-600"
              />
            </>
          ) : (
            <>
              <DashboardStatCard
                title="Total Jobs Posted"
                value={totalJobsPosted}
                color="text-blue-600"
              />

              <DashboardStatCard
                title="Total Applicants"
                value={totalApplicants}
                color="text-yellow-500"
              />

              <DashboardStatCard
                title="Recent Applications"
                value={recentRecruiterApplications.length}
                color="text-green-600"
              />
            </>
          )}

        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Profile Summary */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-fit">
            <h2 className="text-xl font-bold mb-4">My Profile</h2>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-semibold text-gray-900">
                  {user?.name || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-gray-900">
                  {user?.email || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-semibold capitalize text-gray-900">
                  {user?.role || "candidate"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Joined</p>
                <p className="font-semibold text-gray-900">
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            </div>

            <Link
              to="/profile"
              className="
                block
                mt-8
                w-full
                text-center
                bg-blue-600
                text-white
                py-3
                rounded-xl
                hover:bg-blue-700
                transition
              "
            >
              Edit Profile
            </Link>
          </div>

          {/* Right Side - Recent Applications */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6">
              {user?.role === "candidate"
                ? "My Applications"
                : "Recent Applicants"}
            </h2>

            {user?.role === "candidate" ? (
              applications.length === 0 ? (
                <div className="text-gray-500 text-center py-10">
                  No applications found yet.
                </div>
              ) : (
                <div className="space-y-4">
                  {applications.map((application) => (
                    <div
                      key={application._id}
                      className="border border-gray-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {application.job?.title || "Untitled Job"}
                        </h3>
                        <p className="text-gray-500">
                          {application.job?.company || "Unknown Company"}
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                          {application.job?.location || "No location"}
                        </p>
                      </div>

                      <div className="flex flex-col md:items-end gap-2">
                        <span
                          className={`
                            inline-block px-4 py-1 rounded-full text-sm font-medium
                            ${application.status === "Applied"
                                          ? "text-blue-700"
                                          : ""
                                        }
                            ${application.status === "Reviewing"
                                          ? "text-yellow-700"
                                          : ""
                                        }
                            ${application.status === "Rejected"
                                          ? "text-red-700"
                                          : ""
                                        }
                            ${application.status === "Selected"
                                          ? "text-green-700"
                                          : ""
                                        }
                            ${application.status === "Interview"
                                          ? "text-purple-700"
                                          : ""
                                        }
                              `}
                        >
                          {application.status}
                        </span>

                        <p className="text-xs text-gray-400">
                          Applied on{" "}
                          {new Date(
                            application.createdAt
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : recentRecruiterApplications.length === 0 ? (
              <div className="text-gray-500 text-center py-10">
                No applicants yet.
              </div>
            ) : (
              <div className="space-y-4">
                {recentRecruiterApplications.map((application) => (
                  <div
                    key={application._id}
                    className="border border-gray-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {application.applicant?.name || "Unknown Candidate"}
                      </h3>

                      <p className="text-gray-500">
                        {application.applicant?.email || "No Email"}
                      </p>

                      <p className="text-sm text-gray-400 mt-1">
                        Applied for: {application.job?.title || "Untitled Job"}
                      </p>

                      <p className="text-sm text-gray-400">
                        {application.job?.company || "Unknown Company"}
                      </p>
                    </div>

                    <div className="flex flex-col md:items-end gap-2">
                      <span
                        className={`
              inline-block px-4 py-1 rounded-full text-sm font-medium
              ${application.status === "Applied"
                            ? "bg-blue-100 text-blue-700"
                            : ""
                          }
              ${application.status === "Reviewing"
                            ? "bg-yellow-100 text-yellow-700"
                            : ""
                          }
              ${application.status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : ""
                          }
              ${application.status === "Selected"
                            ? "bg-green-100 text-green-700"
                            : ""
                          }
              ${application.status === "Interview"
                            ? "bg-purple-100 text-purple-700"
                            : ""
                          }
            `}
                      >
                        {application.status}
                      </span>

                      <p className="text-xs text-gray-700">
                        Applied on{" "}
                        {new Date(
                          application.createdAt
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Dashboard;




// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Dashboard() {
//   const recentApplications = [
//     {
//       id: 1,
//       company: "Google",
//       role: "Frontend Developer",
//       status: "Applied",
//     },
//     {
//       id: 2,
//       company: "Amazon",
//       role: "Full Stack Developer",
//       status: "Interview",
//     },
//     {
//       id: 3,
//       company: "Microsoft",
//       role: "Backend Developer",
//       status: "Reviewing",
//     },
//   ];

//   return (
//     <>
//       <Navbar />

//       <section className="container-custom py-10">

//         {/* Welcome Section */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold">
//             Welcome Back, Samir 👋
//           </h1>

//           <p className="text-gray-500 mt-2">
//             Track applications and manage your job search.
//           </p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid md:grid-cols-4 gap-6 mb-10">

//           <div className="bg-white p-6 rounded-2xl border shadow-sm">
//             <h2 className="text-3xl font-bold text-blue-600">
//               12
//             </h2>
//             <p className="text-gray-500 mt-2">
//               Applications
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl border shadow-sm">
//             <h2 className="text-3xl font-bold text-green-600">
//               4
//             </h2>
//             <p className="text-gray-500 mt-2">
//               Interviews
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl border shadow-sm">
//             <h2 className="text-3xl font-bold text-purple-600">
//               8
//             </h2>
//             <p className="text-gray-500 mt-2">
//               Saved Jobs
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl border shadow-sm">
//             <h2 className="text-3xl font-bold text-orange-600">
//               2
//             </h2>
//             <p className="text-gray-500 mt-2">
//               Offers
//             </p>
//           </div>

//         </div>

//         {/* Recent Applications */}

//         <div className="bg-white rounded-2xl border shadow-sm p-6">

//           <h2 className="text-2xl font-bold mb-6">
//             Recent Applications
//           </h2>

//           <div className="space-y-4">

//             {recentApplications.map((job) => (
//               <div
//                 key={job.id}
//                 className="
//                 flex
//                 justify-between
//                 items-center
//                 border
//                 rounded-xl
//                 p-4
//                 "
//               >
//                 <div>
//                   <h3 className="font-semibold">
//                     {job.role}
//                   </h3>

//                   <p className="text-gray-500">
//                     {job.company}
//                   </p>
//                 </div>

//                 <span
//                   className="
//                   bg-blue-100
//                   text-blue-600
//                   px-3
//                   py-1
//                   rounded-full
//                   text-sm
//                   "
//                 >
//                   {job.status}
//                 </span>
//               </div>
//             ))}

//           </div>

//         </div>

//       </section>

//       <Footer />
//     </>
//   );
// }

// export default Dashboard;

// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// // function Dashboard() {
// //   return (
// //     <>
// //       <Navbar />

// //       <section className="max-w-7xl mx-auto px-6 py-10">

// //         <h1 className="text-4xl font-bold mb-8">
// //           Dashboard
// //         </h1>

// //         <div className="grid md:grid-cols-4 gap-6">

// //           <div className="border rounded-2xl p-6">
// //             <h2 className="text-3xl font-bold text-blue-600">
// //               12
// //             </h2>

// //             <p>Applications</p>
// //           </div>

// //           <div className="border rounded-2xl p-6">
// //             <h2 className="text-3xl font-bold text-green-600">
// //               4
// //             </h2>

// //             <p>Interviews</p>
// //           </div>

// //           <div className="border rounded-2xl p-6">
// //             <h2 className="text-3xl font-bold text-purple-600">
// //               8
// //             </h2>

// //             <p>Saved Jobs</p>
// //           </div>

// //           <div className="border rounded-2xl p-6">
// //             <h2 className="text-3xl font-bold text-orange-600">
// //               2
// //             </h2>

// //             <p>Offers</p>
// //           </div>

// //         </div>

// //       </section>

// //       <Footer />
// //     </>
// //   );
// // }

// // export default Dashboard;