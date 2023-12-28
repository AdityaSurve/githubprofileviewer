import Banner from "@/components/Banner";
import Empty from "@/components/Empty";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  return (
    <div className="h-screen w-screen flex justify-center items-center font-pops">
      <Navbar setUsername={setUsername} />
      {username ? (
        <Banner username={username} setUsername={setUsername} />
      ) : (
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="text-3xl animate-fade-up animate-once font-extrabold text-white text-opacity-50 text-center w-full mb-4">
            Welcome to Github App
          </div>
          <Empty />
          <div className="text-sm text-white animate-fade-up animate-once animate-delay-[1s] text-opacity-50 text-center w-full mt-4">
            Enter a Github Profile Link to get started
          </div>
        </div>
      )}
    </div>
  );
}
