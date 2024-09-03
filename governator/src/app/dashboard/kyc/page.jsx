import { Fragment } from "react";
import KYCVerification from "@components/KYCVerification";
const KYCPage = () => {
	return (
		<Fragment>
			<div className="p-8">
				<h2 className="text-2xl font-bold mb-2">KYC Verification</h2>
				<p className="text-xl text-[#00ff85] mb-8">
					My KYC Level: <span className="font-semibold">Level 1</span>
				</p>

				<div className="flex gap-6">
					<KYCVerification />
				</div>
			</div>
		</Fragment>
	);
};

export default KYCPage;
