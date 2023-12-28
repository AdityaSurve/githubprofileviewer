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
          <Empty />
          <div className="text-sm text-white text-opacity-50 text-center w-full mt-4">
            Enter a Github Profile Link to get started
          </div>
        </div>
      )}
    </div>
  );
}
