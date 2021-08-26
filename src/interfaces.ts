export interface urlI {
    link: string;
    text: string;
    blank: boolean;
}

export interface ShortLinkI {
    shortLink: string,
    originalLink: string
}

export interface FeatureCardI {
    img: string,
    title: string,
    desc: string,
    margin?: number
}
