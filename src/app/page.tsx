"use client";

import { useEffect, useState } from "react";
import GithubProfile from "@/components/GithubProfile";
import RepoList from "@/components/RepoList";

export default function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/himangmyid") 
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div> {/* 🔥 Bungkus semua dalam satu div */}
      <div className="p-2">
        <h1 className="text-2xl font-bold text-center">GitHub Profile Viewer</h1>
      </div>

      <div className="p-10">
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <div className="md:w-1/3">
            {profile ? <GithubProfile profile={profile} /> : <p>Loading...</p>}
          </div>
          <main className="md:w-2/3">
            <RepoList />
          </main>
        </div>
      </div>
    </div>
  );
}
