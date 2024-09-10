import Image from "next/image";
import { IoMdPersonAdd } from "react-icons/io";
import { RiFunctionAddLine } from "react-icons/ri";
import { BsCheck2Circle } from "react-icons/bs";
import { BsPersonBoundingBox } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { FaXTwitter, FaGithub, FaRegCopy } from "react-icons/fa6";

export function Logo({ src, className, span, spanName, width, height }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={src}
        alt="Governator Logo"
        width={width}
        height={height}
        className={className}
        priority={true}
      />
      <span className={span}>{spanName}</span>
    </div>
  );
}

export const NavBarIcon = ({ className, span, icon, iconName }) => {
  return (
    <li className={className}>
      {icon}
      <span className={span}>{iconName}</span>
    </li>
  );
};

//card sample
export const user = {
  username: "John Doe",
  id: "123456 ",
  status: false,
  src: "/dashboard/animoji.svg",
};


export const DashBoardAvartarCard = ({ src, username, id, status }) => {


  return (
    <div className="block  md:flex items-center justify-between gap-5 p-2 bg-[url('/dashboad/Group1.svg')] bg-cover bg-center bg-[#342eca] text-nowrap rounded-lg">
      <div className="block  md:flex items-start gap-3 text-md text-nowrap">
        <Image src={src} width={100} height={100} priority={true} />
        <div>
          <h1 className=" ">
            Username: <span className="text-success inline">{username}</span>{" "}
          </h1>
          <p className=" inline-flex gap-2">
            ID: {id}{" "}
            <button className="text-xs">
              <FaRegCopy />
            </button>{" "}
          </p>
          <p  className="text-sm text-nowrap">
            KYC Status: {KycStatusChecker(status)}
          </p>
        </div>
      </div>
      <div className="self-end inline-flex gap-1">
        <span>
          <FaXTwitter />
        </span>
        <span>
          <FaGithub />
        </span>
      </div>
    </div>
  );
};

// export function copyId(id){
//  navigator.clipboard.writeText(id).then(()=>{
//    alert('ID copied to clipboard')
//  })
// }

export function KycStatusChecker(status) {
  return status ? (
    <span className="text-success">Verified</span>
  ) : (
    <span className="text-error text-nowrap">
      Not verified <small className="text-green-400 text-xs">verify</small>
    </span>
  );
}

export const sideBar = [
  {
    icon: <MdDashboard />,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <BsCheck2Circle />,
    name: "voting panel",
    path: "/dashboard/votingPanel",
  },
  {
    icon: <BsPersonBoundingBox />,
    name: "kyc verification",
    path: "/dashboard/kyc",
  },
];

export const adminSideBar = [
  {
    icon: <IoMdPersonAdd />,
    name: "add modrator",
    path: "/admin/moderator",
  },
  {
    icon: <RiFunctionAddLine />,
    name: "create poll",
    path: "/admin/create-polls",
  },
];
