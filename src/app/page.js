import Link from "next/link";

async function fetchJobs() {
  const res = await fetch("http://localhost:3000/data/jobData.json");
  return res.json();
}

export default async function Home() {
  const jobs = await fetchJobs();

  return ( //tailwind 
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold text-center mb-8">Job Listings</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <Link key={job.id} href={`/jobs/${job.id}`} className="block">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-gray-400">{job.company}</p>
              <p className="text-sm">{job.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
