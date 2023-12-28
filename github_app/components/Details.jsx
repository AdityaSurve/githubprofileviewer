import React from "react";

const Details = ({ data }) => {
  const colors = {
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Java: "#b07219",
    Ruby: "#701516",
    PHP: "#4F5D95",
    C: "#555555",
    CSharp: "#178600",
    CPlusPlus: "#f34b7d",
    TypeScript: "#2b7489",
    Shell: "#89e051",
    Swift: "#ffac45",
    ObjectiveC: "#438eff",
    Kotlin: "#F18E33",
    Go: "#00ADD8",
    Rust: "#dea584",
    Dart: "#00B4AB",
    Perl: "#0298c3",
    Lua: "#000080",
    Groovy: "#e69f56",
    VisualBasic: "#945db7",
  };

  return (
    <div className="h-full w-full flex flex-col p-5 justify-center overflow-y-auto items-center">
      <div className="font-bold w-full flex items-center gap-2">
        Top{" "}
        <div className="text-white h-5 w-5 rounded-full text-xs flex justify-center items-center bg-white bg-opacity-30 px-3 py-1">
          {data.length}
        </div>
        Repositories :
      </div>

      {data ? (
        <div className="grid grid-cols-2 gap-3 mt-4 overflow-y-auto overflow-hidden w-full h-full">
          {data.map((repo) => (
            <div className="flex flex-col h-32 w-full rounded-md border-[1px] border-white border-opacity-30 p-3 justify-center items-center gap-2">
              <div className="w-full flex justify-between items-center h-full">
                <div
                  className="text-[#2F80F5] text-lg tracking-tight hover:underline cursor-pointer w-full font-bold"
                  onClick={() => {
                    window.open(repo.html_url, "_blank");
                  }}
                >
                  {repo.name}
                </div>
                <div className="text-white rounded-full border-[1.5px] px-2 py-1 border-white border-opacity-20 text-opacity-50 text-xs">
                  {repo.visibility}
                </div>
              </div>
              <div className="w-full flex items-center gap-1 h-12 justify-start">
                <div className="h-full flex items-center w-fit">
                  <div
                    className="
                    h-2 w-2 rounded-full mr-2"
                    style={{ backgroundColor: colors[repo.language] }}
                  />
                </div>
                <div className="text-white text-xs h-full flex items-center w-full">
                  {repo.language}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Details;
