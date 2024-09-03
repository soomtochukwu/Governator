import { Logo, NavBarIcon } from "../dashboard/helper";
import { adminSidebar } from "./adminmenu";

function AdminSidebar() {
  return (
    <section className="min-w-fit md:w-1/4 ">
      <header className=" border border-[#02002D] p-4 ">
        <Logo
          className="object-contain"
          span="text-2xl font-bold "
          width={50}
          height={50}
          src={"/logo.png"}
          spanName={"Governator"}
        />
      </header>
      <nav className="border border-[#02002D] ">
        <ul className="py-4 space-y-8 transition ease-in-out text-nowrap">
          {adminSidebar.map((content, idx) => (
            <NavBarIcon
              key={idx}
              icon={content.icon}
              className={
                "flex items-center justify-start gap-3 hover:bg-[#02002D] p-2 hover:text-white hover:shadow-md hover:px-3 transition-transform duration-300 hover:border-r-[#1AC268] hover:border-r-[.5rem]"
              }
              span="text-md "
              iconName={content.name}
            />
          ))}
        </ul>
      </nav>
    </section>
  );
}
export default AdminSidebar;
