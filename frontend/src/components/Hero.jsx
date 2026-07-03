import { Search } from "lucide-react";

function Hero() {
  return (
    <section className="bg-white min-h-[calc(80vh-60px)] flex items-center">
    

      {/* Main Container */}
      {/* <div className="container-custom py-24"> */}
      <div className="container-custom pt-20 pb-28">

        {/* Small Badge */}
        <div className="flex justify-center mb-8">
          <span className="bg-red-100 text-red-700 px-8 py-4 rounded-full text-xl font-large">
            🚀 Find Your Dream Job Today
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-center text-5xl md:text-6xl font-bold leading-tight">
          Search, Apply &
          <br />
          Get Your
          <span className="text-blue-600"> Dream Job</span>
        </h1>

        {/* Description */}
        <p className="text-center text-gray-500 max-w-2xl mx-auto mt-8 text-lg leading-8">
          Discover thousands of opportunities from top companies.
          Build your career with confidence and find the role
          that matches your skills.
        </p>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mt-10">

          <div className="flex items-center bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">

            <input
              type="text"
              placeholder="Job title, keyword or company..."
              className="flex-1 px-6 py-5 text-lg outline-none"
            />

            <button
              style={{
              border: 'none',
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              color: '#fff',
              padding: '12px 26px',
              borderRadius: '12px',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 12px 24px rgba(37, 99, 235, 0.28)',
            }}
            >
              <Search size={20} />
              Search
            </button>

          </div>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">

          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
            <h2 className="text-3xl font-bold text-blue-600">
              10K+
            </h2>

            <p className="text-gray-600 mt-3">
              Active Jobs
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
            <h2 className="text-3xl font-bold text-blue-600">
              5K+
            </h2>

            <p className="text-gray-600 mt-3">
              Companies
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
            <h2 className="text-3xl font-bold text-blue-600">
              50K+
            </h2>

            <p className="text-gray-600 mt-3">
              Job Seekers
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;