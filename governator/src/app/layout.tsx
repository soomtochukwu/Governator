"use client";
import Header from "../components/HeaderLogo";
//

import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { Providers } from "./providers";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  return (
    <html lang="en">
      <body className={"w-screen flex text-center items-center justify-center"}>
        <Providers>
          {path == "/" ? <Header /> : null}
          {children}
        </Providers>
      </body>
    </html>
  );
}
