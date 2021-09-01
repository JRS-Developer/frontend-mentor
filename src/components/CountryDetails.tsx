import { CountryI } from "../interfaces";
import useFetch from "use-http";
import { restCountrieAPi } from "../api";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../helpers";

const CountryDetails = (props: CountryI) => {
    const { loading, error, get, response } = useFetch(restCountrieAPi);
    const [borders, setBorders] = useState<CountryI[]>([]);

    const getBordersData = useCallback(async () => {
        if (props.borders.length > 0) {
            const joinedBorders = props.borders.join(";");
            const bordersResponse: CountryI[] = await get(
                `alpha?codes=${joinedBorders}`
            );
            if (response.ok) setBorders(bordersResponse);
        }
    }, [get, response, setBorders, props.borders]);

    useEffect(() => {
        getBordersData();
    }, [getBordersData]);

    return (
        <div className="grid md:grid-cols-2 gap-8 md:gap-24">
            <img src={props.flag} alt={props.name} className="self-center" />
            <div className="flex justify-center flex-col gap-6">
                <h2 className="font-extrabold text-3xl">{props.name}</h2>
                <div className="flex flex-col md:flex-row gap-4 md:gap-24 text-sm">
                    <div className="md:flex gap-2 flex-col">
                        <p>
                            <b>Native Name:</b> {props.nativeName}
                        </p>
                        <p>
                            <b>Population:</b>{" "}
                            {numberWithCommas(Number(props.population))}
                        </p>
                        <p>
                            <b>Region:</b> {props.region}
                        </p>
                        <p>
                            <b>Sub Region:</b> {props.subregion}
                        </p>
                        <p>
                            <b>Capital:</b> {props.capital}
                        </p>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <p>
                            <b>Top Level Domain:</b>{" "}
                            {props.topLevelDomain.join(", ")}
                        </p>
                        <p>
                            <b>Currencies:</b>{" "}
                            {props.currencies
                                .map((currency) => currency.name)
                                .join(", ")}
                        </p>
                        <p>
                            <b>Languages:</b>{" "}
                            {props.languages.map((l) => l.name).join(", ")}
                        </p>
                    </div>
                </div>
                <div className="flex gap-y-2 gap-x-4 flex-wrap items-center md:mt-8">
                    {borders.length > 0 && (
                        <p className="text-sm">
                            <b>Border Countries:</b>
                        </p>
                    )}
                    {loading
                        ? "Loading"
                        : borders.map((border) => {
                            if (!error) {
                                return (
                                    <Link
                                        to={`${border.alpha3Code}`}
                                        key={border.name}
                                        className="button"
                                    >
                                        {border.name}
                                    </Link>
                                );
                            } else {
                                return [];
                            }
                        })}
                </div>
            </div>
        </div>
    );
};
export default CountryDetails;
