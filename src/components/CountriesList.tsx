import { useCallback, useEffect, useState } from "react";
import useFetch from "use-http";
import { restCountrieAPi } from "../api";
import { CountryI } from "../interfaces";
import CountryCard from "./CountryCard";


const CountriesList = () => {
    const { loading, error, get, response } = useFetch(restCountrieAPi);
    const [countries, setCountries] = useState<CountryI[]>([]);

    const getCountries = useCallback(async () => {
        const myCountries: CountryI[] = await get("all");
        if (response.ok) setCountries(myCountries);
    }, [get, response]);

    useEffect(() => {
        getCountries();
    }, [getCountries]);

    return (
        <ul className="mt-8 grid md:grid-cols-4 gap-16">
            {loading && "loading"}
            {error && error}
            {countries.map((country, index) => (
                <CountryCard {...country} key={index} />
            ))}
        </ul>
    );
};

export default CountriesList;
