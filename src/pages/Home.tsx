import CountriesList from "../components/CountriesList";
import FilterBar from "../components/FilterBar";
import { createContext, useCallback, useEffect, useState } from "react";
import useFetch from "use-http";
import { restCountrieAPi } from "../api";
import { countriesContextI, CountryI } from "../interfaces";

export const countriesContext = createContext<countriesContextI>({});

const Home = () => {
    const { loading, error, get, response } = useFetch(restCountrieAPi);
    const [countries, setCountries] = useState<CountryI[]>([]);

    const setNewCountries = (countries: CountryI[] | {}) => {
        if (Array.isArray(countries)) {
            setCountries(countries);
        } else {
            setCountries([]);
        }
    };

    const getAllCountries = useCallback(async () => {
        try {
            setCountries([]);
            const myCountries: CountryI[] = await get("all");
            if (response.ok) setNewCountries(myCountries);
        } catch (e) {
            console.log(e);
        }
    }, [get, response]);

    const getCountriesByName = async (name: string) => {
        try {
            setCountries([]);
            const myCountries: CountryI[] = await get(`/name/${name}`);
            if (response.ok) setNewCountries(myCountries);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getAllCountries();
    }, [getAllCountries]);

    return (
        <countriesContext.Provider
            value={{
                loading,
                error,
                getAllCountries,
                countries,
                getCountriesByName,
            }}
        >
            <FilterBar />
            <CountriesList />
        </countriesContext.Provider>
    );
};

export default Home;
