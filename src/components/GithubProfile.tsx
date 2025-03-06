"use client";

import { FaGithub, FaTwitter, FaLink } from "react-icons/fa";
import Image from "next/image";

interface GithubProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  location: string;
  company: string;
  html_url: string;
  blog?: string;
  twitter_username?: string;
  public_repos: number;
  followers: number;
  following: number;
}

const GithubProfile = ({ profile }: { profile?: GithubProfile }) => {
  if (!profile) {
    return <p className="text-center text-gray-500">Loading profile...</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 text-center">
      <Image
        src={profile.avatar_url}
        alt={profile.name}
        width={96}
        height={96}
        className="w-24 h-24 mx-auto rounded-full shadow-md"
      />
      <h2 className="text-xl font-semibold mt-3">{profile.name}</h2>
      <p className="text-gray-500">@{profile.login}</p>
      <p className="text-sm text-gray-600 mt-2">{profile.bio}</p>

      <div className="mt-4 flex justify-center space-x-4 text-gray-700">
        <p>📍 {profile.location}</p>
        <p>🏢 {profile.company}</p>
      </div>

      <div className="mt-4 flex justify-center space-x-6">
        <a href={profile.html_url} target="_blank" rel="noopener noreferrer" className="text-black">
          <FaGithub size={24} />
        </a>
        {profile.blog && (
          <a href={profile.blog} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            <FaLink size={24} />
          </a>
        )}
        {profile.twitter_username && (
          <a
            href={`https://twitter.com/${profile.twitter_username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            <FaTwitter size={24} />
          </a>
        )}
      </div>

      <div className="mt-4 flex justify-around text-gray-700">
        <div>
          <p className="text-lg font-semibold">{profile.public_repos}</p>
          <p className="text-sm">Repositories</p>
        </div>
        <div>
          <p className="text-lg font-semibold">{profile.followers}</p>
          <p className="text-sm">Followers</p>
        </div>
        <div>
          <p className="text-lg font-semibold">{profile.following}</p>
          <p className="text-sm">Following</p>
        </div>
      </div>
    </div>
  );
};

export default GithubProfile;
