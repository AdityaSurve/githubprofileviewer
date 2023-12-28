import React from "react";
import GitHubCalendar from "react-github-calendar";

const Graph = ({ username }) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="my-3 w-full px-7 font-bold">
        Contributions : {username}
      </div>
      <GitHubCalendar
        username={username}
        style={{
          color: "#ffffff75",
        }}
        fontSize={13}
      />
    </div>
  );
};

export default Graph;
