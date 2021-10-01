import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import { useEffect, useState } from "react";

export default function Home() {
  const [repositories, setRepositories] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let token = process.env.GITHUB_AUTH_TOKEN;

      const repos = await getLatestRepos(userData, token);
      setRepositories(repos);
    };
    getData();
  }, []);

  console.log(repositories);

  return (
    <ContainerBlock
      title="Home - zalfaridzi"
      description="Zaki's Personal Website."
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}
