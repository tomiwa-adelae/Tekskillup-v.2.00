"use client";

import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { CreateCourseSchema } from "@/lib/validations";

const CourseName = () => {
	const form = useForm<z.infer<typeof CreateCourseSchema>>({
		resolver: zodResolver(CreateCourseSchema),
		defaultValues: {
			name: "",
		},
	});

	function onSubmit(data: z.infer<typeof CreateCourseSchema>) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">
						{JSON.stringify(data, null, 2)}
					</code>
				</pre>
			),
		});
	}
	return (
		<div
			className={
				"row-span-1 rounded-lg border border-gray-300 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] space-y-4 hover:border-0"
			}
		>
			<div className="">
				<div className="flex items-center justify-between gap-1">
					<p className="text-xs font-bold uppercase">Course name</p>

					<Button
						size={"sm"}
						variant={"ghost"}
						className=" font-bold text-xs uppercase"
					>
						<Pen className="w-4 h-4 mr-2" />
						Edit
					</Button>
				</div>
				<div>
					<p className="text-sm mt-4">MERN Stack Development</p>
					{/* <Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-3 mt-2"
						>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="Write the name of your course..."
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit">Update</Button>
						</form>
					</Form> */}
				</div>
			</div>
		</div>
	);
};

export default CourseName;
