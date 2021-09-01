import { useContext } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { countriesContext } from "../pages/Home";

const filterRegions: string[] = [
    "africa",
    "america",
    "asia",
    "europe",
    "oceania",
];

const FilterBar = () => {
    const { getCountriesByName } = useContext(countriesContext);
    let keyTimer: any;

    const searchCountries = (value: string) => {
        if (getCountriesByName) getCountriesByName(value);
    };

    const handleChange = (value: string) => {
        clearTimeout(keyTimer);
        if (value) {
            keyTimer = setTimeout(() => searchCountries(value), 500);
        }
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex relative lg:w-1/3 mb-8 md:mb-0">
                <FaSearch className="input-icon left-3 opacity-40  dark:opacity-100 dark:text-white h-3" />
                <input
                    placeholder="Search for a country..."
                    className="input input-search shadow w-full"
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
            <div className="w-max md:w-auto md:ml-auto relative">
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
