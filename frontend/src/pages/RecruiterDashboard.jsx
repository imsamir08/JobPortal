import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RecruiterDashboard() {

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold">
          Recruiter Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your jobs and applicants.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white border rounded-2xl p-6 shadow-sm">

            <h2 className="text-lg font-semibold">
              Total Jobs
            </h2>

            <p className="text-4xl mt-3 font-bold text-blue-600">
              0
            </p>

          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm">

            <h2 className="text-lg font-semibold">
              Applications
            </h2>

            <p className="text-4xl mt-3 font-bold text-green-600">
              0
            </p>

          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm">

            <h2 className="text-lg font-semibold">
              Companies
            </h2>

            <p className="text-4xl mt-3 font-bold text-purple-600">
              0
            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default RecruiterDashboard;