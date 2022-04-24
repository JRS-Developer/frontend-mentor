import { useContext, useRef, useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { Region } from "../interfaces";
import { countriesContext } from "../pages/Home";

const filterRegions: Region[] = [
    {
        text: "Africa",
        value: "Africa",
    },
    {
        text: "America",
        value: "Americas",
    },
    {
        text: "Asia",
        value: "Asia",
    },

    {
        text: "Europe",
        value: "Europe",
    },

    {
        text: "Oceania",
        value: "Oceania",
    },
];

const initialSelectValue = "filter";

const FilterBar = () => {
    const [selectValue, setSelectValue] = useState(initialSelectValue);
    const inputRef = useRef<HTMLInputElement>(null);

    const {
        getCountriesByName,
        getAllCountries,
        getCountriesByRegion,
        getCountriesByNameAndRegion,
    } = useContext(countriesContext);
    let keyTimer: any;

    const searchCountries = (name: string) => {
        const inputValue =
            inputRef.current !== null ? inputRef.current.value : "";

        if (
            inputValue !== "" &&
            getCountriesByNameAndRegion &&
            selectValue !== initialSelectValue
        ) {
            getCountriesByNameAndRegion(selectValue, inputValue);
        } else if (getCountriesByName) getCountriesByName(name);
    };

    const handleInputChange = async (value: string) => {
        clearTimeout(keyTimer);
        if (value.length > 0) {
            keyTimer = setTimeout(() => searchCountries(value), 1000);
        } else if (
            getAllCountries &&
            getCountriesByRegion &&
            selectValue !== initialSelectValue
        ) {
            // Without the await, the get countries by region will not work
            await getAllCountries();
            getCountriesByRegion(selectValue, false);
        } else if (getAllCountries) {
            getAllCountries();
        }
    };

    const handleSelectChange = (value: string) => {
        setSelectValue(value);
        const inputValue =
            inputRef.current !== null ? inputRef.current.value : "";
        if (
            value !== initialSelectValue &&
            inputValue !== "" &&
            getCountriesByNameAndRegion
        ) {
            getCountriesByNameAndRegion(value, inputValue);
        } else if (getCountriesByRegion) getCountriesByRegion(value);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex relative lg:w-1/3 mb-8 md:mb-0">
                <FaSearch className="input-icon left-3 opacity-40  dark:opacity-100 dark:text-white h-3" />
                <input
                    placeholder="Search for a country..."
                    className="input input-search shadow w-full"
                    onChange={(e) => handleInputChange(e.target.value)}
                    ref={inputRef}
                />
            </div>
            <div className="w-max md:w-auto md:ml-auto relative">
                <FaChevronDown className="input-icon right-2 h-2" />
                <select
                    className=" shadow select w-40 text-xs"
                    defaultValue={selectValue}
                    onChange={(e) => handleSelectChange(e.target.value)}
                >
                    <option
                        value={initialSelectValue}
                        disabled
                        className="hidden"
                    >
                        Filter by Region
                    </option>
                    {filterRegions.map((region) => (
                        <option
                            key={region.value}
                            value={region.value}
                            className="capitalize"
                        >
                            {region.text}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default FilterBar;
