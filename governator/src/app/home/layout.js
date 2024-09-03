"use client";
import { HomeHeader } from "./homeHeader";

export default function Layout({ children }) {
  return (
    <main className=" space-y-6 px-3 py-3 bg-[url('/Group.svg')] bg-[#010014]">
      <HomeHeader
        avatarImage={`/animoji2.png`}
        logo={`/logo.png`}
        avatarName={`franklivani`}
      />

      <div>{children}</div>
      {children}
    </main>
  );
}
