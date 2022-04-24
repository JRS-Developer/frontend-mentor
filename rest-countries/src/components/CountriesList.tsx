import { useContext } from "react";
import { countriesContext } from "../pages/Home";
import CountryCard from "./CountryCard";
import Loading from "./Loading";

const CountriesList = () => {
    const { loading, countries } = useContext(countriesContext);

    return (
        <ul className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16 min-h-50-screen w-full h-full">
            {loading && <Loading />}
            {countries && countries.length > 0
                ? countries.map((country, index) => (
                    <CountryCard {...country} key={index} />
                ))
                : !loading && (
                    <div className="flex w-full h-full justify-center items-center col-span-10">
                        There are no results
                    </div>
                )}
        </ul>
    );
};

export default CountriesList;
