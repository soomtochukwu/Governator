"use client";
// http://localhost:3000/login
// This page is responsible for rendering the login page

import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
	const [fourDigitCode, setFourDigitCode] = useState(""); // New state for the four-digit code
	const [userExists, setUserExists] = useState(false); // State to track if user exists

	const router = useRouter();

	// checking if a user exists in a smart contract or database
	function checkUserExists(code) {
		return code === "1234"; // Example: if code is "1234", the user exists
	}

	const handleFourDigitChange = (e) => {
		const code = e.target.value;
		// Ensure only numbers are entered and limit to 4 digits
		if (code.match(/^\d{0,4}$/)) {
			setFourDigitCode(code);
			if (code.length === 4) {
				const exists = checkUserExists(code);
				setUserExists(exists);
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Check if the four-digit code is valid and user exists
		if (fourDigitCode.length === 4 && userExists) {
			// If everything is okay, redirect to the dashboard
			router.push("/dashboard");
		} else {
			// Otherwise, display an error message (handled in JSX)
			console.log("User does not exist or invalid code.");
		}
	};

	return (
		<Fragment>
			<div className="min-h-screen flex">
				{/*************************************************Left Div ********************************************** */}
				<div className="flex-1 flex flex-col justify-center items-center bg-white p-8">
					<div className="w-full max-w-md animate-fade-in-down">
						<div className="flex justify-center mb-6">
							<Image
								src="/Hidden-mining-bro2.svg"
								alt="Governator Logo"
								width={300}
								height={300}
								className="object-contain animate-pulse"
							/>
						</div>
						<h1 className="text-2xl font-bold text-center mb-2 text-[#0E0E2C] animate-fade-in">
							Login
						</h1>
						<p className="text-center text-black mb-6 animate-pulse">
							Welcome, Input your Four Digit Code
						</p>
						{/* Form for connecting wallet */}
						<form onSubmit={handleSubmit}>
							{/* Four-digit input field */}
							<input
								type="text"
								value={fourDigitCode}
								onChange={handleFourDigitChange}
								placeholder="Enter four-digit code"
								className="w-full py-3 px-4 border border-gray-300 text-sm font-medium rounded-md bg-white text-[#0E0E2C] mb-4"
							/>
							{!userExists && fourDigitCode.length === 5 && (
								<p className="text-red-500">
									User does not exist, please register.
								</p>
							)}
							<button
								type="submit"
								className="w-full py-3 mt-4 border border-gray-300 text-sm font-medium rounded-md text-white bg-[#0E0E2C] hover:bg-[#262670] hover:text-white transition-all duration-300"
							>
								CONNECT WALLET
							</button>
						</form>
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
				</div>

				{/*************************************************Right Div ********************************************** */}

				<div className="hidden lg:flex flex-1 bg-gray-900 text-white items-center justify-center">
					<div className="w-full max-w-lg">
						<Image
							src="/welcomeback.svg"
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
