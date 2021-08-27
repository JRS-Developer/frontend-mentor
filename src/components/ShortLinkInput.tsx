import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";
import { ShortLinkI } from "../interfaces";

type Props = {
    setLinks: React.Dispatch<React.SetStateAction<ShortLinkI[]>>;
};

interface DataResult {
    data: {
        result: {
            original_link: string;
            full_short_link: string;
        };
    };
}

const ShortLinkInput = ({ setLinks }: Props) => {
    const [inputValue, setInputValue] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [loading, setLoading] = useState(false);

    const checkIsValid = (inputValue: string): boolean => {
        if (inputValue.length === 0) {
            setIsValid(false);
            return false;
        } else {
            setIsValid(true);
            return true;
        }
    };
    const saveLink = (links: ShortLinkI[]): void => {
        localStorage.setItem("links", JSON.stringify(links));
    };

    const getLink = async (link: string) => {
        try {
            setLoading(true);
            const {
                data: { result },
            }: DataResult = await axios.post(
                `https://api.shrtco.de/v2/shorten?url=${link}`
            );
            const originalLink = result.original_link;
            const shortLink = result.full_short_link;
            let newLinks: ShortLinkI[] = [];
            setLinks((oldLInks) => {
                newLinks = [
                    ...oldLInks,
                    {
                        originalLink,
                        shortLink,
                    },
                ];
                return newLinks;
            });
            saveLink(newLinks);
            setLoading(false);
        } catch (e) {
            setLoading(false)
            console.log(e);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInputValue('')
        checkIsValid(inputValue) && getLink(inputValue);
    };

    return (
        <form
            className="grid grid-cols-none md:grid-cols-1-auto bg-primary-alt rounded-lg p-8 md:p-12 gap-12 bg-no-repeat md:gap-4 bg-shorten-mobile md:bg-shorten-desktop"
            onSubmit={handleSubmit}
        >
            <div className="relative">
                <input
                    type="text"
                    className={`input w-full ${isValid ? null : "error"}`}
                    placeholder="Shorten a link here..."
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        checkIsValid(e.target.value);
                    }}
                    value={inputValue}
                />
                <p
                    className={`text-secondary italic mt-2 ${isValid ? "hidden" : "absolute"
                        }`}
                >
                    Please add a link
                </p>
            </div>
            <Button
                round_style={"squared"}
                type="submit"
                spinner={loading}
                disabled={loading}
            >
                {loading ? "Processing" : "Shorten It!"}
            </Button>
        </form>
    );
};

export default ShortLinkInput;
