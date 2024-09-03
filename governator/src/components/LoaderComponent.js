// components/Loader.js
import React from "react";
import Image from "next/image";

const LoaderComponent = () => {
	return (
		<div className="flex items-center justify-center w-screen h-screen bg-[#f5f5f5]">
			<div className="relative flex items-center justify-center">
				<div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#00ff85]"></div>
				{/* <div className="absolute">
					<Image
						src="/path/to/your-image.png"
						alt="Loading..."
						width={100}
						height={100}
					/>
				</div> */}
				<svg
					width="231"
					height="57"
					viewBox="0 0 231 57"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute bottom-[-60px]"
				>
					<path
						d="M0.6875 0.125H211.938L213.188 6.375L215.688 20.75L220.062 35.75L225.062 47L230.688 55.75V57H6.9375L5.6875 53.875L2.5625 32.625L0.6875 10.125V0.125Z"
						fill="#02002D"
					/>
				</svg>
			</div>
		</div>
	);
};

export default LoaderComponent;
