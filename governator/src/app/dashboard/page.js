"use client";
import Image from "next/image";
import { DashBoardAvartarCard } from "./components/helper";

export const user = {
  username: "John Doe",
  id: "123456 ",
  status: false,
  src: "/dashboard/animoji.svg",
};

const Dashboard = () => {
  function copyId() {
    const { id } = user;
    navigator.clipboard.writeText(id);
  }
  return (
    <div>
      <div className="flex justify-between items-start text-left pt-3 text-base">
        <div>
          <h1> Dashboard</h1>
          <section className="space-y-5">
            <DashBoardAvartarCard {...user} func={copyId} />
            <div className="flex items-start gap-2 justify-start flex-wrap">
              <Image src={"/Frame92.svg"} width={100} height={100} />
              <Image src={"/Frame93.svg"} width={100} height={100} />
            </div>
          </section>
        </div>
        <div>
          <h1>voting History</h1>
          <section className="space-y-3 border border-3 h-[30rem] p-2">
            <Image src={"/Frame25.svg"} width={250} height={250} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

