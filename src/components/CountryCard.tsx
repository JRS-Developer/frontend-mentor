import { CountryI } from "../interfaces";
import { Link } from "react-router-dom";

const CountryCard = (props: CountryI) => {
    return (
        <li className="rounded bg-white shadow dark:bg-dark-blue transition-all hover:shadow-md">
            <Link to={`/details/${props.alpha3Code}`}>
                <img src={props.flag} alt={props.name} />
            </Link>
            <div className="p-4">
                <h3 className="font-extrabold">{props.name}</h3>
                <p>
                    <b>Population:</b> {props.population}
                </p>
                <p>
                    <b>Region:</b> {props.region}
                </p>
                <p>
                    <b>Capital:</b> {props.capital}
                </p>
            </div>
        </li>
    );
};

export default CountryCard;
