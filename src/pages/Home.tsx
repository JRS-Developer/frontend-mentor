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
    const [allCountries, setAllCountries] = useState<CountryI[]>([]);

    const getApiCountries = useCallback(
        async (query: string) => {
            const newCountries: CountryI[] = await get(query);
            return response.ok ? newCountries : [];
        },
        [get, response]
    );

    const getFilteredCountries = (
        region: string,
        countries: CountryI[]
    ): CountryI[] => {
        console.log(region)
        return countries.filter((country) => {
            return country.region === region;
        });
    };

    const getAllCountries = useCallback(async () => {
        setCountries([]);
        const myCountries = await getApiCountries("all");
        setCountries(myCountries);
        setAllCountries(myCountries);
    }, [getApiCountries]);

    const getCountriesByName = async (name: string) => {
        setCountries([]);
        const myCountries = await getApiCountries(`name/${name}`);
        setCountries(myCountries);
    };

    const getCountriesByRegion = (region: string, all: boolean = true) => {
        const newCountries: CountryI[] = getFilteredCountries(
            region,
            all ? allCountries : countries
        );
        setCountries(newCountries);
    };

    const getCountriesByNameAndRegion = async (
        region: string,
        name: string
    ) => {
        const countriesByName = await getApiCountries(`name/${name}`);
        const newCountries = getFilteredCountries(region, countriesByName);
        setCountries(newCountries);
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
                getCountriesByRegion,
                getCountriesByNameAndRegion,
            }}
        >
            <FilterBar />
            <CountriesList />
        </countriesContext.Provider>
    );
};

export default Home;
