import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import Image from "next/image";
import React from "react";

const CourseName = () => {
	return (
		<div
			className={
				"row-span-1 rounded-lg border border-gray-300 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] space-y-4 hover:border-0"
			}
		>
			<div className="flex items-start justify-between">
				<div>
					<p className="text-xs font-bold uppercase">Course name</p>
					<p className="text-sm mt-4">MERN Stack Development</p>
				</div>
				<Button
					size={"sm"}
					variant={"ghost"}
					className=" font-bold text-xs uppercase"
				>
					<Pen className="w-4 h-4 mr-2" />
					Edit
				</Button>
			</div>
		</div>
	);
};

export default CourseName;
