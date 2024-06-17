"use client";

import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/lib/motion";
import { TypingSubText } from "@/components/CustomTexts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, Layers, MoveRight, UserRound } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "@/public/assets/animations/showcase-animation.json";
import Image from "next/image";
import { benefits } from "@/constants";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import { EmblaOptionsType } from "embla-carousel";

import useEmblaCarousel from "embla-carousel-react";

import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselButtons";

type PropType = {
	slides: number[];
	options?: EmblaOptionsType;
};

const Testimonials = () => {
	const options: EmblaOptionsType = { dragFree: true, loop: true };

	const SLIDE_COUNT = 5;
	const slides = Array.from(Array(SLIDE_COUNT).keys());

	const [emblaRef, emblaApi] = useEmblaCarousel(options);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	return (
		<motion.div
			// @ts-ignore
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="flex flex-col gap-8 md:flex-row items-start justify-between container py-12"
		>
			<div>
				<motion.p
					variants={slideIn("left", "tween", 0.2, 1)}
					className="text-sm mb-4 uppercase text-primary"
				>
					Testimonials
				</motion.p>
				<TypingSubText
					title="What They Say"
					textStyles="text-2xl lg:text-3xl"
				/>
				<motion.div
					variants={textVariant(1.2)}
					className="text-xs lg:text-sm mt-6 space-y-4"
				>
					<p>
						Tekskillup has got more than 100k positive ratings from
						our users around the world.
					</p>
					<p>
						Some of the students and teachers were greatly helped by
						the Skilline.
					</p>
					<p>Are you too? Please give your assessment.</p>
				</motion.div>
			</div>
			<div className="flex-1"></div>
		</motion.div>
	);
};

export default Testimonials;
