"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";

const OurSuccess = () => {
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
				title="Our Success"
				textStyles="text-center text-2xl lg:text-3xl"
			/>
			<motion.p
				variants={textVariant(1.2)}
				className="text-xs lg:text-sm mt-4 lg:w-3/4 mx-auto"
			>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
				qui temporibus ipsam suscipit sint asperiores tenetur incidunt
				id officiis quam, doloribus adipisci vero inventore atque et
				tempore ipsa reprehenderit obcaecati?
			</motion.p>

			<motion.div
				variants={fadeIn("up", "tween", 0.2, 1)}
				className="mt-8 flex items-center justify-center gap-4 flex-wrap md:justify-between"
			>
				<div className="flex flex-col gap-1 items-center justify-center">
					<h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl">
						15K+
					</h2>
					<p className="text-xs font-medium md:text-sm">Students</p>
				</div>
				<div className="flex flex-col gap-1 items-center justify-center">
					<h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-6xl">
						15K+
					</h2>
					<p className="text-xs font-medium md:text-sm">Students</p>
				</div>
				<div className="flex flex-col gap-1 items-center justify-center">
					<h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl">
						15K+
					</h2>
					<p className="text-xs font-medium md:text-sm">Students</p>
				</div>
				<div className="flex flex-col gap-1 items-center justify-center">
					<h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl">
						15K+
					</h2>
					<p className="text-xs font-medium md:text-sm">Students</p>
				</div>
				<div className="flex flex-col gap-1 items-center justify-center">
					<h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl">
						15K+
					</h2>
					<p className="text-xs font-medium md:text-sm">Students</p>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default OurSuccess;
