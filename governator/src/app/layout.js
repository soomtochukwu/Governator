"use client";

import "./globals.css";
import HeaderLogo from "../components/HeaderLogo";
// import { ThemeProvider } from "./ThemeProvider";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      {/* <ThemeProvider> */}
      {/* <link rel="style/css" href="/logo.png"></link> */}
      <body className={inter.className}>
        {pathname === "/login" ? <HeaderLogo /> : null}
        {children}
      </body>
      {/* </ThemeProvider> */}
    </html>
  );
}
