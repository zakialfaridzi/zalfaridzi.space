import axios from "axios";

const getLatestRepos = async (data, token) => {
  // console.log("data", data);
  try {
    const username = data.githubUsername;

    // let token = `token ${process.env.GITHUB_AUTH_TOKEN}`;
    // console.log("TOKEN", token);

    if (token) {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?&sort=updated:asc`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      let repos = res.data;
      let latestSixRepos = repos.splice(0, 6);
      // console.log("LATEST 6 repos", latestSixRepos);
      return latestSixRepos;
    } else {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?&sort=updated:asc`
      );
      let repos = res.data;
      let latestSixRepos = repos.splice(0, 6);
      return latestSixRepos;
    }
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;
