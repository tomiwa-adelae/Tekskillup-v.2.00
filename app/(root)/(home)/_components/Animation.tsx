"use client";

import Lottie from "lottie-react";
import animationData from "../../../../public/assets/animations/showcase-animation.json";

const Animation = () => {
	return <Lottie animationData={animationData} className="flex-1" />;
};

export default Animation;
