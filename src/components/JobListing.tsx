import JobItem from "./JobItem";
import { useAppContext } from "../Context";

const JobListing = () => {
	const { jobItems } = useAppContext();
	return (
		<div>
			{jobItems.map((item) => {
				const { id } = item;
				return <JobItem key={id} {...item} />;
			})}
		</div>
	);
};

export default JobListing;
