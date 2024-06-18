import { DashboardBoxes } from "./_components/DashboardBoxes";
import SubHeader from "../_components/SubHeader";

const page = () => {
	return (
		<div>
			<SubHeader
				title="Welcome, Adrian"
				description="Access & manage everything from here"
			/>
			<DashboardBoxes />
		</div>
	);
};

export default page;
