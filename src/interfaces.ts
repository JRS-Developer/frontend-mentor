import { ReactNode } from "react";

export interface urlI {
    text: string,
    link: string
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

export interface ButtonI {
    children: ReactNode;
    extraClass?: string | boolean;
    round_style?: "rounded" | "squared";
    type?: 'submit' | 'button'
    onClick?(): any
    spinner?: boolean
    disabled?: boolean
}
