import { useAppContext } from "../Context";
import FilterButton from "./FilterButton";

const FilterBar = () => {
    const { filters, ClearFilterContext } = useAppContext();
    const handleClick = () => {
        if (ClearFilterContext) ClearFilterContext();
    };

    if (filters.length > 0) {
        return (
            <div className="flex shadow-green bg-white px-6 py-4 z-10 relative mx-8 rounded-lg -mt-8 md:mx-32 md:px-8">
                <div className="flex flex-wrap gap-4">
                    {filters.map((filter) => {
                        return (
                            <FilterButton
                                title={filter}
                                key={filter}
                                removable={true}
                            />
                        );
                    })}
                </div>
                <button
                    onClick={handleClick}
                    className="ml-auto text-sm hover:underline font-bold"
                >
                    Clear
                </button>
            </div>
        );
    } else {
        return null;
    }
};

export default FilterBar;
