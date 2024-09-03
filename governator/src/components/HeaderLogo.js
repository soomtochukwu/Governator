import Image from "next/image";
import Link from "next/link";
// import "../../governator/src/app/globals.css";
const Header = () => {
  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <Logo
            className="object-contain"
            span="text-2xl font-bold text-gray-800 "
            width={50}
            height={50}
          />
        </Link>
        <div className="nav space-x-8 ">
          <Link className="text-gray-500" href={"/login"}>
            Login
          </Link>
          <Link className="text-gray-500" href={"/signup"}>
            Sign Up
          </Link>
        </div>
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
