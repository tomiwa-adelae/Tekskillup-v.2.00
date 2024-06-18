"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";

const Greetings = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="container text-center py-12"
		>
			<TypingSubText
				title={`Welcome, Adrian`}
				textStyles="text-green-400 text-2xl lg:text-3xl"
			/>
			<motion.p
				variants={textVariant(1.2)}
				className="text-xs lg:text-sm mt-4 lg:w-3/4 mx-auto"
			>
				Access & manage everything from here
			</motion.p>
		</motion.div>
	);
};

export default Greetings;
