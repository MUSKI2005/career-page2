import { notFound } from "next/navigation";

async function fetchJobs() {
  const res = await fetch("http://localhost:3000/data/jobData.json");
  return res.json();
}

export default async function JobDetails({ params }) {
  const jobs = await fetchJobs();
  const job = jobs.find((j) => j.id === params.id);

  if (!job) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-400">{job.company} - {job.location}</p>
      <p className="mt-4">{job.description}</p>

      <h2 className="text-xl font-semibold mt-6">Requirements</h2>
      <ul className="list-disc list-inside">
        {job.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Benefits</h2>
      <ul className="list-disc list-inside">
        {job.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      <p className="text-sm text-gray-500 mt-4">Posted on: {job.postedDate}</p>
    </div>
  );
}