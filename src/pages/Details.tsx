import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "use-http";
import { restCountrieAPi } from "../api";
import CountryDetails from "../components/CountryDetails";
import { CountryI } from "../interfaces";

const Details = () => {
    const { id } = useParams<{ id: string }>();
    const [country, setCountry] = useState<CountryI>();

    const { loading, error, get, response } = useFetch(restCountrieAPi);

    const getCountryData = useCallback(async () => {
        const countryResponse: CountryI = await get(`alpha/${id}`);
        if (response.ok) setCountry(countryResponse);
    }, [get, id, response]);

    useEffect(() => {
        getCountryData();
    }, [getCountryData]);

    return (
        <div>
            {loading ? (
                "loading"
            ) : country && !error ? (
                <CountryDetails {...country} />
            ) : (
                error && error
            )}
        </div>
    );
};

export default Details;
