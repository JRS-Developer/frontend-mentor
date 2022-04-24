type currency = {
    code: string;
    name: string;
    symbol: string;
};

export interface CountryI {
    name: string;
    nativeName: string;
    population: string;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string[];
    currencies: currency[];
    languages: { name: string }[];
    borders: string[];
    flag: string;
    alpha3Code: string;
}

export interface countriesContextI {
    loading?: boolean;
    error?: Error | undefined;
    getAllCountries?(): void;
    countries?: CountryI[];
    getCountriesByName?(name: string): void;
    getCountriesByRegion?(region: string, all?: boolean): void;
    getCountriesByNameAndRegion?(region: string, name: string): void
}

export interface Region {
    text: string;
    value: string;
}


