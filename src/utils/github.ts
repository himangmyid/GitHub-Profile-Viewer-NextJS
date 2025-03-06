export async function fetchRepos(username: string) {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=created`);
    return res.json();
  }
  
  export async function fetchRepoDetail(username: string, repoName: string) {
    const res = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
    return res.json();
  }
  