import JobItem from "./JobItem";
import { useAppContext } from "../Context";

const JobListing = () => {
    const { jobItems } = useAppContext();
    return (
        <div className="flex flex-col gap-16 mt-16 md:gap-6">
            {jobItems.map((item) => {
                const { id } = item;
                return <JobItem key={id} {...item} />;
            })}
        </div>
    );
};

export default JobListing;
