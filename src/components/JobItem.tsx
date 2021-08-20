import { JobInterface } from "../Interfaces";
import FilterButton from "./FilterButton";

const JobItem = (props: JobInterface) => {
    return (
        <div
            className={`flex gap-4 px-6 py-6 mx-8 rounded-lg shadow-green flex-col md:flex-row md:items-center md:mx-32 md:px-8 ${
                props.featured && "border-primary border-l-5"
            }`}
        >
            <div className="-mt-14 w-14 md:w-auto md:m-0">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/${props.logo}`}
                    alt={props.company}
                />
            </div>
            <div className="text-base space-y-2">
                <div className="flex gap-x-2 gap-y-4 items-center flex-wrap md:flex-nowrap">
                    <p>{props.company}</p>
                    {props.new && (
                        <p className="flex items-center justify-center text-white bg-primary py-1 px-2 rounded-2xl text-xs">
                            NEW!
                        </p>
                    )}
                    {props.featured && (
                        <p className="flex items-center justify-center py-1 px-2 rounded-2xl text-white bg-very-dark-g-cyan text-xs">
                            FEATURED
                        </p>
                    )}
                </div>
                <div>
                    <p className="text-very-dark-g-cyan hover:text-primary text-xl transition-all">
                        {props.position}
                    </p>
                </div>
                <div className="flex items-center gap-4 text-very-dark-g-cyan opacity-50 font-medium flex-wrap">
                    <p>{props.postedAt}</p>
                    <div className="h-1 w-1 rounded-full bg-very-dark-g-cyan"></div>
                    <p>{props.contract}</p>
                    <div className="h-1 w-1 rounded-full bg-very-dark-g-cyan"></div>
                    <p>{props.location}</p>
                </div>
            </div>
            <hr className="md:hidden" />
            <div className="md:ml-auto md:justify-end flex gap-4 flex-wrap">
                <FilterButton title={props.level} />
                <FilterButton title={props.role} />
                {props.tools.map((tool) => (
                    <FilterButton key={`${tool}-${props.id}`} title={tool} />
                ))}
                {props.languages.map((language) => (
                    <FilterButton
                        key={`${language}-${props.id}`}
                        title={language}
                    />
                ))}
            </div>
        </div>
    );
};

export default JobItem;
