"use client";

import AdminMenu from "./adminmenu";
import AdminSidebar from "./Adminside";
export default function AdminLayout({ children }) {
  return (
    <main className="relative w-full h-screen overflow-hidden flex p-4 bg-[#e9e9e9] text-blue-950 gap-2">
      <AdminSidebar sidebar={false} />
      <div className="relative w-full">
        <AdminMenu />
        <div className="w-full h-full overflow-x-hidden">{children}</div>
      </div>
    </main>
  );
}
