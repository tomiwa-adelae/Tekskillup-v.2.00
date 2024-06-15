import React from "react";
import Animation from "./Animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

const Showcase = () => {
	return (
		<div className="flex py-12 items-center justify-center md:justify-between text-center md:text-left flex-col md:flex-row gap-4 min-h-[85vh] container">
			<div className="flex-1">
				<h1 className="text-3xl leading-relaxed md:text-4xl lg:text-5xl md:leading-snug lg:leading-snug font-bold">
					Study Online Swiftly,{" "}
					<span className="bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text text-transparent">
						Conveniently
					</span>{" "}
					& Affordable
				</h1>
				<p className="text-xs mt-2 lg:text-sm">
					Grow with Online design and development courses. <br />{" "}
					Learn from Industry Experts and enhance your skills.
				</p>
				<Button className="mt-10" asChild>
					<Link href="/sign-up">
						Get started <MoveUpRight className="w-4 h-4 ml-2" />
					</Link>
				</Button>
			</div>
			{/* <Animation /> */}
		</div>
	);
};

export default Showcase;
