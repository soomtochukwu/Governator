"use client";

import MenuBar from "./menubar";
import SideBar from "./sideBar";
import { useState } from "react";

// export const metadata = {
//   title: "User Dashboard",
// };

export default function DashboardLayout({ children }) {
  const [sidebar, setSidebar] = useState(true);
  return (
    <main className="relative w-full h-screen overflow-hidden flex p-4 bg-[#e9e9e9] text-blue-950 gap-2">
      <SideBar sidebar={sidebar} />
      <div className="relative w-full">
        <MenuBar click={() => setSidebar((prev) => !prev)} />
        <div className="w-full h-full overflow-x-hidden">{children}</div>
      </div>
    </main>
  );
}
