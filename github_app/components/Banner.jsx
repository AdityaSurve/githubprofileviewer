import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Graph from "./Graph";
import Details from "./Details";

const Banner = ({ username, setUsername }) => {
  const [data, setData] = useState([]);
  const [repoData, setRepoData] = useState([]);

  const getData = async () => {
    if (username === "") return;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setData(data);
  };

  const getRepoData = async () => {
    if (username === "") return;
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const data = await response.json();
    setRepoData(data);
  };

  useEffect(() => {
    getData();
    getRepoData();
  }, [username]);

  return (
    <div className="h-screen z-0 flex overflow-hidden w-screen bg-[#010409] pt-16">
      <Sidebar data={data} setUsername={setUsername} />
      <div className="h-full w-full flex flex-col justify-center items-center">
        <Graph username={username} />
        <Details data={repoData} />
      </div>
    </div>
  );
};

export default Banner;
