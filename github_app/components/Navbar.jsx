import React, { useState } from "react";
import GithubLogo from "./GithubLogo";
import { SearchOutlined } from "@ant-design/icons";

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
          <div className="h-10 px-4 w-10 flex justify-center items-center">
            <SearchOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
