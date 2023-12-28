import React, { useState } from "react";
import { TeamOutlined, LinkOutlined, TwitterOutlined } from "@ant-design/icons";
import FollowList from "./FollowList";

const Sidebar = ({ data, setUsername }) => {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [label, setLabel] = useState("");

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  return (
    <div className="h-full w-96 py-2 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-52 h-52 border-[1.5px] border-white border-opacity-20 rounded-full overflow-hidden">
        <img
          src={data.avatar_url}
          alt=""
          className="h-52 w-52 object-contain"
        />
      </div>
      <div className="w-full mt-5 flex px-5 flex-col justify-center items-center gap-2">
        {data.name && (
          <div className="w-full text-3xl font-semibold">{data.name}</div>
        )}
        <div className="w-full text-2xl font-light text-gray-400">
          {data.login}
        </div>
      </div>
      <div className="mt-5 w-full gap-2 text-sm px-5 flex items-center ">
        <TeamOutlined />
        <div
          className="cursor-pointer hover:text-sky-500"
          onClick={() => {
            getData(data.followers_url).then((data) => {
              setModalData(data);
            });
            setLabel("Followers");
            setShow(true);
          }}
        >
          {data.followers} followers
        </div>
        <div className="text-white">.</div>
        <div
          className="cursor-pointer hover:text-sky-500"
          onClick={() => {
            getData(data.following_url.replace("{/other_user}", "")).then(
              (data) => {
                setModalData(data);
              }
            );
            setLabel("Following");
            setShow(true);
          }}
        >
          {data.following} following
        </div>
      </div>
      {data.blog && (
        <div
          className="mt-5 w-full text-gray-500 gap-2 text-sm px-5 flex items-center"
          onClick={() => {
            window.open(data.blog, "_blank");
          }}
        >
          <LinkOutlined />
          <div className="text-xs text-white hover:text-sky-500 cursor-pointer">
            {data.blog}
          </div>
        </div>
      )}
      {data.twitter_username && (
        <div
          className="mt-5 w-full text-gray-500 gap-2 text-sm px-5 flex items-center"
          onClick={() => {
            window.open(
              `https://twitter.com/${data.twitter_username}`,
              "_blank"
            );
          }}
        >
          <TwitterOutlined />
          <div className="text-xs text-white hover:text-sky-500 cursor-pointer">
            {data.twitter_username}
          </div>
        </div>
      )}
      {show && (
        <FollowList
          data={modalData}
          label={label}
          setShow={setShow}
          setUsername={setUsername}
        />
      )}
    </div>
  );
};

export default Sidebar;
