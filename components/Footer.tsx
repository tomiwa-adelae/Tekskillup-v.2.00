"use client";

import { footerVariants } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
	return (
		<motion.footer
			variants={footerVariants}
			initial="hidden"
			whileInView="show"
			className="flex flex-col sm:flex-row py-6 items-start sm:items-center justify-between container gap-6"
		>
			<Image
				src={"/assets/tekskillup-logo.png"}
				alt="Tekskillup Logo"
				width={1000}
				height={1000}
				className="w-28"
			/>
			<p className="text-xs">© 2024 TEKSKILLUP. ALL RIGHTS RESERVED.</p>
		</motion.footer>
	);
};

export default Footer;
