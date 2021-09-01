import { CountryI } from "../interfaces";

const CountryDetails = (props: CountryI) => {
    return (
        <div>
            <img src={props.flag} alt={props.name} />
            <div>
                <h2>{props.name}</h2>
                <div>
                    <p>
                        <b>Native Name:</b> {props.nativeName}
                    </p>
                    <p>
                        <b>Population:</b> {props.population}
                    </p>
                    <p>
                        <b>Region:</b> {props.region}
                    </p>
                    <p>
                        <b>Sub Region:</b> {props.subregion}
                    </p>
                    <p>
                        <b>Caital:</b> {props.capital}
                    </p>
                    <div>
                        <p>
                            <b>Top Level Domain:</b> {props.topLevelDomain.join(', ')}
                        </p>
                        <p>
                            <b>Currencies:</b> {props.currencies.map(currency => currency.name).join(', ')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CountryDetails;
