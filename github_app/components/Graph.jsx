import React from "react";
import GitHubCalendar from "react-github-calendar";

const Graph = ({ username }) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="my-3 w-full animate-fade-up animate-once animate-delay-[1s] px-7 font-bold">
        Contributions : {username}
      </div>
      <div className="animate-fade-up  animate-once animate-delay-[1.25s]">
        <GitHubCalendar
          username={username}
          style={{
            color: "#ffffff75",
          }}
          fontSize={13}
        />
      </div>
    </div>
  );
};

export default Graph;
