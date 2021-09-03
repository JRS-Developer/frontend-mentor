import { useContext } from "react";
import { countriesContext } from "../pages/Home";
import CountryCard from "./CountryCard";

const CountriesList = () => {
    const { loading, countries } = useContext(countriesContext);

    return (
        <ul className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16">
            {loading && "loading"}
            {countries &&
                countries.length > 0 ?
                countries.map((country, index) => (
                    <CountryCard {...country} key={index} />
                )) : !loading && "There are no results"}
        </ul>
    );
};

export default CountriesList;
