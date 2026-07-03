import JobCard from "./JobCard";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: "₹12 LPA",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Microsoft",
    location: "Hyderabad",
    salary: "₹15 LPA",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Amazon",
    location: "Remote",
    salary: "₹18 LPA",
  },
];

function FeaturedJobs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Featured Jobs
        </h2>

        <p className="text-gray-500 mt-3">
          Explore opportunities from top companies
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            salary={job.salary}
          />
        ))}
      </div>

    </section>
  );
}

export default FeaturedJobs;