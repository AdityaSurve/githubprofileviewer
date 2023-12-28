import React from "react";
import { CloseOutlined } from "@ant-design/icons";

const FollowList = ({ data, label, setShow, setUsername }) => {
  return (
    <div className="fixed h-screen w-screen text-white bg-black bg-opacity-20 backdrop-blur-sm top-0 left-0 flex justify-center items-center">
      <div className="h-72 rounded-md overflow-hidden border-[1.5px] flex flex-col justify-center items-center border-white border-opacity-20 w-96 bg-gray-700">
        <div className="flex justify-between items-center w-full h-16 px-5">
          <div className="text-sm font-semibold">{label}</div>
          <div
            className="text-sm cursor-pointer hover:bg-gray-100 hover:bg-opacity-15 p-1 flex justify-center items-center rounded-full font-semibold"
            onClick={() => {
              setShow(false);
            }}
          >
            <CloseOutlined />
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
