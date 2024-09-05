"use client";

import React, { useEffect } from "react";
import "./globals.css";
import FeaturesSection from "../components/FeaturesSection";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

const Governator = () => {
  const //
    { isConnected, address } = useAccount(),
    { push } = useRouter();

  useEffect(() => {
    if (isConnected && address) {
      push("/auth");
    }
  }, [isConnected, address]);
  return (
    <div className="w-screen bg-green-50 flex flex-col items-center ">
      <div className="flex hero p-8 bg-green-800 items-center justify-center h-screen">
        <section className="bg-white lg:py-32 md:py-32 trans flex items-center lg:w-6/12 p-8  rounded-lg shadow-md mb-8">
          <div className="flex flex-col items-center justify-center space-y-11">
            <h1 className="text-4xl text-gray-700 font-bold text-center leading-10">
              Welcome to Governator
            </h1>
            <p className="text-gray-700 text-justify ">
              Governator is a decentralized application (dApp) designed to
              facilitate open governance in African electoral processes. By
              leveraging blockchain technology, Governator enables secure voter
              registration, anonymous voting, and transparent vote collation,
              including the participation of diaspora voters. Governator ensures
              the anonymity of all cast votes through smart contracts, thereby
              enhancing trust, fairness, and participation in elections across
              Africa.
            </p>
          </div>
        </section>
      </div>

      <div className=" min-h-screen lg:w-4/6 text-justify">
        <main className="flex-1 w-full px-4 lg:px-8 py-8">
          <section className="bg-white p-8 rounded-lg shadow-md mb-8">
            <FeaturesSection />
          </section>

          <section className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="mt-8">
              <div className="flex justify-center text-gray-500">
                Get Started
              </div>
            </div>
            <div className="flex justify-center">
              <ConnectButton label="Sign up or Sign in"></ConnectButton>
            </div>
          </section>
        </main>

        <footer className="w-full bg-green-800 text-white py-4 text-center">
          <p>&copy; 2024 Governator - All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Governator;
