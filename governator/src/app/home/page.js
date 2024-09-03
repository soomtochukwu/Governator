import { HomeFilter } from "./homeFilter";
import { NotificationCard, HomeTracker, HomeVoteCard } from "./helper";

const Home = () => {
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
        {/* <section className="w-2/5 border border-green-400 rounded-t-md max-h-fit">
          <h1 className="bg-green-400 mb-3 px-3 py-2 space-y-2">
            Onchain Notification
          </h1>
          <NotificationCard avater={"/animoji3.png"} />
          <NotificationCard avater={"/animoji3.png"} />
          <NotificationCard avater={"/animoji3.png"} />
        </section> */}
      </div>
    </div>
  );
};

export default Home;
