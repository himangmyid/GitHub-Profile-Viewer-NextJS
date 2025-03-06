import { fetchRepoDetail } from "@/utils/github";

export default async function RepoDetail({ params }: { params: { id: string } }) {
  const repo = await fetchRepoDetail("himangmyid", params.id);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{repo.name}</h1>
      <p className="text-gray-600">{repo.description}</p>
      <p>⭐ Stars: {repo.stargazers_count} | 🍴 Forks: {repo.forks_count}</p>
      <p>📌 Language: {repo.language}</p>
      <a href={repo.html_url} target="_blank" className="text-blue-500">View on GitHub</a>
    </div>
  );
}
