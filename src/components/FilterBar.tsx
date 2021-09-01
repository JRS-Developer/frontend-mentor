import { FaSearch, FaChevronDown } from "react-icons/fa";

const filterRegions: string[] = [
    "africa",
    "america",
    "asia",
    "europe",
    "oceania",
];

const FilterBar = () => {
    return (
        <div className="flex">
            <div className="flex relative lg:w-1/3">
                <FaSearch className="input-icon left-3 opacity-40  dark:opacity-100 dark:text-white h-3" />
                <input
                    placeholder="Search for a country..."
                    className="input input-search shadow lg:w-full "
                />
            </div>
            <div className="ml-auto relative">
                <FaChevronDown className="input-icon right-2 h-2" />
                <select
                    className=" shadow select w-40 text-xs"
                    defaultValue="filter"
                >
                    <option value="filter" disabled className="hidden">
                        Filter by Region
                    </option>
                    {filterRegions.map((region) => (
                        <option
                            key={region}
                            value={region}
                            className="capitalize"
                        >
                            {region}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default FilterBar;
