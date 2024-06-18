import CourseHeader from "./_components/CourseHeader";
import CourseName from "./_components/CourseName";
import { BentoGrid } from "@/components/ui/bento-grid";

const page = () => {
	return (
		<div>
			<CourseHeader name={"Backend Development"} />
			<BentoGrid className="mt-12">
				<CourseName />
				<CourseName />
				<CourseName />
				<CourseName />
				<CourseName />
				<CourseName />
				<CourseName />
				<CourseName />
			</BentoGrid>
		</div>
	);
};

export default page;
