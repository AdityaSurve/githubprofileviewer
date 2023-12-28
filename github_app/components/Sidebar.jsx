import React, { useState } from "react";
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-people-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
        </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-link-45deg"
            viewBox="0 0 16 16"
          >
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
          </svg>
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
