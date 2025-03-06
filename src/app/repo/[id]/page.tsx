import { fetchRepoDetail } from "@/utils/github";

type RepoDetailProps = {
  repo: {
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    html_url: string;
  };
};

export default function RepoDetail({ repo }: RepoDetailProps) {
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

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const repo = await fetchRepoDetail("himangmyid", params.id);

  return {
    props: {
      repo,
    },
  };
}
