type currency = {
    code: string,
    name: string,
    symbol: string
}

export interface CountryI {
    name: string,
    nativeName: string,
    population: string,
    region: string,
    subregion: string,
    capital: string,
    topLevelDomain: string[],
    currencies: currency[]
    languages: { name: string }[],
    borders: string[],
    flag: string,
    alpha3Code: string
}
