import { MdDashboard } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import { BsPersonBoundingBox } from "react-icons/bs";
import { Logo } from "../helper";
import { NavBarIcon } from "../helper";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbSettings2 } from "react-icons/tb";
import { RiMenuUnfold4Line2 } from "react-icons/ri";
const Dashboard = () => {
  return (
    <div className="p-4 bg-[#e9e9e9] text-blue-950 gap-2 flex items-start justify-between  border w-full ">
      <section className=" min-w-fit md:w-1/4 ">
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
            <NavBarIcon
              icon={<MdDashboard />}
              className={
                "flex items-center justify-start gap-3 hover:bg-[#02002D] p-2 hover:text-white hover:shadow-md hover:px-3 transition-transform duration-300 hover:border-r-[#1AC268] hover:border-r-[.5rem]"
              }
              span="text-md "
              iconName={"Dashboard"}
            />
            <NavBarIcon
              icon={<BsCheck2Circle />}
              className={
                "flex items-center justify-start gap-3 hover:bg-[#02002D] p-2 hover:text-white hover:shadow-md hover:px-3 transition-transform duration-300 hover:border-r-[#1AC268] hover:border-r-[.5rem]"
              }
              span="text-md "
              iconName={"voting panel"}
            />
            <NavBarIcon
              icon={<BsPersonBoundingBox />}
              className={
                "flex items-center justify-start gap-3 hover:bg-[#02002D] p-2 hover:text-white hover:shadow-md hover:px-3 transition-transform duration-300 hover:border-r-[#1AC268] hover:border-r-[.5rem]"
              }
              span="text-md "
              iconName={"kyc verification"}
            />
          </ul>
        </nav>
      </section>

      <section className="p-4 border border-[#02002D] flex items-center justify-between w-2/3 rounded-lg ">
        <div>
          <NavBarIcon
            icon={<RiMenuUnfold4Line2 />}
            className={
              "text-xl list-none border border-[#cecdd4] p-1 rounded-lg  bg-white"
            }
          />
        </div>
        <div className=" flex items-center list-none gap-3">
          <NavBarIcon
            icon={<TbSettings2 />}
            className={"text-xl  bg-white p-1 rounded-lg"}
          />
          <NavBarIcon
            icon={<IoIosNotificationsOutline />}
            className={"text-xl  bg-white text-center p-1  rounded-lg"}
          />
          <Logo
            className="object-contain border border-[#cecdd4] p-1 rounded-3xl"
            span="text-2xl font-bold "
            width={50}
            height={50}
            src={"/animoji2.png"}
          />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
