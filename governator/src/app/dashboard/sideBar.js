"use client";

import { sideBar, Logo, NavBarIcon } from "../home/helper";

function SideBar({ sidebar }) {
  return (
    <section className="min-w-fit md:w-1/4 ">
      <header className=" border border-[#02002D] p-2 transition-all duration-300">
        <Logo
          className="object-contain transition-all"
          span="text-2xl font-bold "
          width={50}
          height={50}
          src={"/logo.png"}
          spanName={sidebar && "Governator"}
        />
      </header>
      <nav className="border border-[#02002D] transition-all duration-300 ">
        <ul className="py-1 space-y-8 transition  text-nowrap">
          {sideBar.map((content, idx) => (
            <NavBarIcon
              key={idx}
              icon={content.icon}
              className={`flex items-center justify-start gap-3 hover:bg-[#02002D] p-2 hover:text-white hover:shadow-md hover:px-3
                 transition-all duration-300 ${!sidebar && "justify-center"}`}
              span="text-md "
              iconName={sidebar && content.name}
            />
          ))}
        </ul>
      </nav>
    </section>
  );
}
export default SideBar;
