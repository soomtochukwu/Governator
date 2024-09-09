"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import HeaderLogo from "../components/HeaderLogo";
// import { ThemeProvider } from "./ThemeProvider";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      {/* <ThemeProvider> */}
        <body className={inter.className}>
          {pathname === "/login" ? <HeaderLogo /> : null}
          {children}
        </body>
      {/* </ThemeProvider> */}
    </html>
  );
}
