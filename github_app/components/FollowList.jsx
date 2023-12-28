import React, { useEffect, useRef } from "react";

const FollowList = ({ data, label, setShow, setUsername }) => {
  const handleEscape = (event) => {
    if (event.keyCode === 27) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, []);

  const followlistbox = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        followlistbox.current &&
        !followlistbox.current.contains(event.target)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [followlistbox]);

  return (
    <div className="fixed h-screen w-screen text-white bg-black bg-opacity-20 backdrop-blur-sm top-0 left-0 flex justify-center items-center">
      <div
        className="h-72 rounded-md overflow-hidden border-[1.5px] flex flex-col justify-center items-center border-white border-opacity-20 w-96 bg-gray-700"
        ref={followlistbox}
      >
        <div className="flex justify-between items-center w-full h-16 px-5">
          <div className="text-sm font-semibold">{label}</div>
          <div
            className="text-sm cursor-pointer hover:bg-gray-100 hover:bg-opacity-15 p-1 flex justify-center items-center rounded-full font-semibold"
            onClick={() => {
              setShow(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
        </div>
        <div className="h-full w-full bg-gray-800 overflow-y-auto">
          {data ? (
            <>
              {data.map((item, index) => {
                return (
                  <div
                    className="flex items-center gap-4 px-5 py-2 border-b border-white hover:bg-gray-100 hover:bg-opacity-15 border-opacity-10 cursor-pointer"
                    key={index}
                    onClick={() => {
                      setUsername(item.login);
                      setShow(false);
                    }}
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={item.avatar_url}
                        alt=""
                        className="h-10 w-10 object-cover"
                      />
                    </div>
                    <div className="text-sm font-semibold">{item.login}</div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <div className="text-sm font-semibold">No {label}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FollowList;
