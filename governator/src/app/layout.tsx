import Header from "../components/HeaderLogo";
//
import { Inter } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Governator",
  description:
    "Governator is a decentralized application (dApp) designed to facilitate open governance in African electoral processes. Leveraging blockchain technology, it enables voter registration, secure casting, and collation of votes, including diaspora voting, while ensuring the anonymity of all cast votes through smart contracts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          "w-screen flex text-center items-center justify-center"
        }
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
