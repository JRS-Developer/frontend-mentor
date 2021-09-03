import { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "use-http";
import { restCountrieAPi } from "../api";
import CountryDetails from "../components/CountryDetails";
import { CountryI } from "../interfaces";
import { FiArrowLeft } from 'react-icons/fi'
import Loading from "../components/Loading";

const Details = () => {
    const { id } = useParams<{ id: string }>();
    const [country, setCountry] = useState<CountryI>();
    const history = useHistory()

    const goToPrevious = () => {
        if (history.length > 1) {
            history.goBack()
        } else {
            history.push('/')
        }
    }

    const { loading, error, get, response } = useFetch(restCountrieAPi);

    const getCountryData = useCallback(async () => {
        const countryResponse: CountryI = await get(`alpha/${id}`);
        if (response.ok) setCountry(countryResponse);
    }, [get, id, response]);

    useEffect(() => {
        getCountryData();
    }, [getCountryData]);

    return (
        <div className="min-h-50-screen">
            <button onClick={goToPrevious} className="button button-icon mb-12">
                <FiArrowLeft />
                Back
            </button>
            {loading ? (
                <Loading />
            ) : country && !error ? (
                <CountryDetails {...country} />
            ) : (
                error && error
            )}
        </div>
    );
};

export default Details;
