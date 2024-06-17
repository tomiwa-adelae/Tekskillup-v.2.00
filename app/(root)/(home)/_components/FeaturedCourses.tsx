"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import { ArrowRight, Briefcase } from "lucide-react";
import { featuredCourses, topCategories } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FeaturedCourses = () => {
	return (
		<div className="container py-12">
			<TypingSubText
				title="Featured Courses"
				textStyles="text-center text-2xl lg:text-3xl"
			/>
			<p className="text-xs lg:text-sm mt-4 text-center lg:w-3/4 mx-auto">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
				ullam, labore quasi repellendus quod veritatis voluptates vitae
				consequuntur laborum. Non magnam repellendus doloremque
				veritatis sunt.
			</p>
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{featuredCourses.map(({ price, title, image, id }, index) => {
					return (
						<motion.div
							className="flex flex-col justify-center gap-3 border border-gray-300 p-2 rounded-lg"
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
							<p className="text-sm">{price}</p>
							<div className="w-auto text-right">
								<Button size={"sm"} asChild>
									<Link href={`/courses/${id}`}>
										<ArrowRight className="w-4 h-4" />
									</Link>
								</Button>
							</div>
						</motion.div>
					);
				})}
			</div>
			<div className="text-center mt-8">
				<Button asChild>
					<Link href="/courses">View all</Link>
				</Button>
			</div>
		</div>
	);
};

export default FeaturedCourses;
