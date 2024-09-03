import MenuBar from "./menubar";
import SideBar from "./sideBar";

export const metadata = {
  title: "User Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <main className="relative w-full h-screen overflow-hidden flex p-4 bg-[#e9e9e9] text-blue-950 gap-2">
      <SideBar />
      <div className="relative w-full">
        <MenuBar />
        <div className="w-full h-full overflow-x-hidden">
            {children}
        </div>
      </div>
    </main>
  );
}
