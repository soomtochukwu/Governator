"use client";

import MenuBar from "./components/menubar";
import SideBar from "./components/sideBar";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const path = usePathname();
  const pathName = path.split("/").map((i) => i);
  return (
    <main className="relative w-full h-screen overflow-hidden flex p-4 bg-[#e9e9e9] text-blue-950 gap-2">
      <SideBar sidebar={false} />
      <div className="relative w-full">
        <MenuBar />
        <h1 className="text-2xl font-bold">{pathName[2]}</h1>
        <div className="w-full h-full overflow-x-hidden">{children}</div>
      </div>
    </main>
  );
}
