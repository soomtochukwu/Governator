"use client";
import { HomeFilter } from "./components/homeFilter";
import { HomeTracker, HomeVoteCard } from "./components/helper";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const //
    { address, isConnected } = useAccount(),
    { push } = useRouter();
  useEffect(() => {
    if (!(address, isConnected)) {
      push("/");
    }
  }, [address, isConnected, push]);
  return (
    <div>
      <HomeFilter />
      <div className="flex justify-between  gap-3 overflow-x-hidden ">
        <section className="w-2/3 border px-4 space-y-4 py-3 transition">
          <div className=" hover:border-b-2 shadow-md hover:bg-slate-500 bg-[url('/Frame.svg')]  px-1">
            <HomeTracker tracker={true} />
            <HomeVoteCard trend={true} />
          </div>
          <div className=" hover:border-b-2 shadow-md hover:bg-slate-500 bg-[url('/Frame.svg')]  px-1">
            <HomeTracker tracker={false} />
            <HomeVoteCard trend={false} />
          </div>
          <div className=" hover:border-b-2 shadow-md hover:bg-slate-500 bg-[url('/Frame.svg')]  px-1">
            <HomeTracker tracker={null} />
            <HomeVoteCard trend={true} />
          </div>
          <div className=" hover:border-b-2 shadow-md hover:bg-slate-500 bg-[url('/Frame.svg')]  px-1">
            <HomeTracker tracker={null} />
            <HomeVoteCard trend={true} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
