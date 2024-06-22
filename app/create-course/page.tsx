import React from "react";
import Box from "./_components/Box";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";

const page = () => {
	return (
		<div className="container h-screen relative flex items-center justify-center w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
			<div className="relative z-20">
				<Box />
			</div>
			<div className="w-full absolute inset-0 h-screen">
				{/* <SparklesCore
					id="tsparticlesfullpage"
					background="transparent"
					minSize={0.6}
					maxSize={1.4}
					particleDensity={100}
					className="w-full h-full"
					particleColor="#104F19"
				/> */}
			</div>
			{/* <Spotlight
				className="-top-5 left-0 md:left-30 md:-top-10"
				fill="green"
			/> */}
		</div>
	);
};

export default page;
