"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import { Briefcase } from "lucide-react";
import { topCategories } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

const FeaturedCourses = () => {
	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="container py-12"
		>
			<TypingSubText
				title="Featured Courses"
				textStyles="text-center text-2xl lg:text-3xl"
			/>
			<motion.p
				variants={textVariant(1.2)}
				className="text-xs lg:text-sm mt-4 text-center lg:w-3/4 mx-auto"
			>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
				expedita ullam nostrum tempora voluptatem hic quae, ipsam
				obcaecati corrupti veritatis temporibus praesentium dolores fuga
				odio.
			</motion.p>

			<div className="grid">
				{[
					{
						title: "Web Development",
						price: 3000,
						id: "828282",
						image: "/assets/test.jpg",
					},
					{
						title: "Web Development",
						price: 3000,
						id: "8282",
						image: "/assets/test.jpg",
					},
					{
						title: "Web Development",
						price: 3000,
						id: "882",
						image: "/assets/test.jpg",
					},
					{
						title: "Web Development",
						price: 3000,
						id: "8282",
						image: "/assets/test.jpg",
					},
					{
						title: "Web Development",
						price: 3000,
						id: "82282",
						image: "/assets/test.jpg",
					},
					{
						title: "Web Development",
						price: 3000,
						id: "28282",
						image: "/assets/test.jpg",
					},
					{
						title: "Web Development",
						price: 3000,
						id: "82828200",
						image: "/assets/test.jpg",
					},
				].map(({ price, title, image, id }, index) => {
					return (
						<motion.div
							variants={fadeIn(
								"right",
								"spring",
								index * 0.5,
								0.75
							)}
							// className="flex flex-col items-center justify-center gap-3 border border-gray-300 p-2 rounded-lg"
							key={index}
						>
							<Image
								src={image}
								width={1000}
								height={1000}
								alt={title}
								className="aspect-video rounded-lg"
							/>
							<h4 className="font-bold text-base">{title}</h4>
						</motion.div>
					);
				})}
			</div>
		</motion.div>
	);
};

export default FeaturedCourses;
