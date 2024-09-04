import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";

// import "../../governator/src/app/globals.css";
const Header = () => {
  return (
    <header className="bg-white  flex items-center justify-between  shadow w-screen px-2 py-3">
      <Link href="/">
        <Logo
          className="object-contain"
          span="text-2xl font-bold text-gray-800 "
          width={50}
          height={50}
        />
      </Link>
      <div className="nav">
        <ConnectButton
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "avatar",
          }}
          chainStatus="icon"
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
        />
      </div>
    </header>
  );
};

export default Header;

export function Logo({ className, span, width, height }) {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.png" // Replace with the actual logo path
        alt="Governator Logo"
        width={width}
        height={height}
        className={className}
      />
      <span className={span}>Governator</span>
    </div>
  );
}
