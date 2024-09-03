"use client";
// http://localhost:3000/login
// This page is responsible for rendering the login page

import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


export default function Signup() { // Changed the component name

	const router = useRouter();

	const handleConnectWallet = () => {
		// Redirect to wallet connection logic or page
		router.push("/connect-wallet");
	};

	return (
		<Fragment>
			<div className="min-h-screen flex">
				{/* Left Div */}
				<div className="flex-1 flex flex-col justify-center items-center bg-white p-8">
					<div className="w-full max-w-md animate-fade-in-down">
						<div className="flex justify-center mb-6">
							<Image
								src="/welcomeback.svg"
								alt="Governator Logo"
								width={300}
								height={300}
								className="object-contain"
							/>
						</div>
						<h1 className="text-2xl font-bold text-center mb-2 text-[#0E0E2C] animate-fade-in">
							Login {/* Adjusted the title */}
						</h1>
						<p className="text-center text-black mb-6 animate-pulse">
							Welcome, Click Below to connect wallet
						</p>
						<form onSubmit={handleConnectWallet}>
							<button
								type="submit"
								className="w-full py-3 mt-4 border border-gray-300 text-sm font-medium rounded-md text-white bg-[#0E0E2C] hover:bg-[#262670] hover:text-white transition-all duration-300"
							>
								CONNECT WALLET
							</button>
						</form>
					</div>
					<div className="mt-6 text-center text-sm animate-fade-in">
						<span className="text-black">
							If you don't have an account with us,
							<Link
								href="/signup"
								className="text-green-600 hover:text-green-500 transition-all duration-300"
							>
								Register here
							</Link>
						</span>
					</div>
				</div>

				{/* Right Div */}
				<div className="hidden lg:flex flex-1 bg-gray-900 text-white items-center justify-center">
					<div className="w-full max-w-lg">
						<Image
							src="/Hidden-mining-bro2.svg"
							alt="Governator image"
							width={1000}
							height={1000}
							className="object-contain animate-fade-in-left"
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
