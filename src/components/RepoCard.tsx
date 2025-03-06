"use client";
import { Star, GitFork, Globe, FileCode2, Calendar, HardDriveDownload, ScrollText } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description?: string;
  stargazers_count: number;
  forks_count: number;
  language?: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  size: number;
  license?: { name: string };
}

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
      {/* Nama Repo */}
      <h2 className="text-xl font-bold text-blue-600">{repo.name}</h2>
      <p className="text-gray-600 text-sm mb-3">{repo.description || "No description available"}</p>

      {/* Info Stats */}
      <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
        <p className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500" /> {repo.stargazers_count} Stars</p>
        <p className="flex items-center gap-1"><GitFork className="w-4 h-4 text-green-500" /> {repo.forks_count} Forks</p>
        <p className="flex items-center gap-1"><FileCode2 className="w-4 h-4 text-indigo-500" /> {repo.language || "Unknown"}</p>
        <p className="flex items-center gap-1"><HardDriveDownload className="w-4 h-4 text-gray-500" /> {repo.size} KB</p>
        <p className="flex items-center gap-1"><Calendar className="w-4 h-4 text-red-500" /> {new Date(repo.created_at).toLocaleDateString()}</p>
        <p className="flex items-center gap-1"><Globe className="w-4 h-4 text-blue-400" /> {new Date(repo.updated_at).toLocaleDateString()}</p>
        {repo.license && (
          <p className="flex items-center gap-1 col-span-2"><ScrollText className="w-4 h-4 text-gray-600" /> {repo.license.name}</p>
        )}
      </div>

      {/* Tombol View on GitHub */}
      <a 
        href={repo.html_url} 
        target="_blank" 
        className="mt-4 inline-block w-full text-center text-white bg-blue-500 hover:bg-blue-600 py-2 rounded-md font-medium transition"
      >
        🔗 View on GitHub
      </a>
    </div>
  );
}
