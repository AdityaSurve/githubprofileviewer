import React, { useState } from "react";
import GithubLogo from "./GithubLogo";

const Navbar = ({ setUsername }) => {
  const [url, setUrl] = useState("");
  return (
    <div className="fixed z-10 w-full h-16 bg-[#161B22] shadow-sm shadow-gray-900 flex items-center justify-between px-5 0 top-0 left-0">
      <div className="h-fit w-fit shadow-sm shadow-gray-900 rounded-full">
        <GithubLogo width={"32px"} height={"32px"} />
      </div>
      <div className="rounded-md relative overflow-hidden text-[#818A9370] flex items-center h-10 border-[0.5px] border-[#818A9370]">
        <div className="w-full h-full items-center flex justify-center">
          <input
            type="text"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            value={url}
            className="bg-transparent text-[#818A93] text-xs px-3 w-64 h-full outline-none"
            placeholder="Enter profile link ... "
          />
        </div>
        <div className="w-[1.5px] h-1/2 bg-[#818A93]" />
        <div
          className="w-fit hover:bg-[#818A9370] hover:text-white text-[#818A93] transition-all duration-300 cursor-pointer h-full items-center flex justify-center px-2"
          onClick={() => {
            const user = url.split("/");
            setUsername(user[user.length - 1]);
            setUrl("");
          }}
        >
          <div className="h-10 px-3 w-10 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
              style={{ width: "32px", height: "32px" }}
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
