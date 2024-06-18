import Image from "next/image";
import SubHeader from "../_components/SubHeader";
import SearchBar from "./_components/SearchBar";
import { CoursesTable } from "./_components/CoursesTable";

const page = () => {
	return (
		<div>
			<SubHeader
				title="All courses"
				description="Access & manage all the published or drafted courses from here"
			/>
			<SearchBar />
			<CoursesTable />
		</div>
	);
};

export default page;
