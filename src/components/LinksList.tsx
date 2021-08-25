import { useEffect } from "react";
import { ShortLinkI } from "../interfaces";
import ShortLink from "./ShortLink";

const LinksList = ({ links }: { links: ShortLinkI[] }) => {
    useEffect(() => { }, []);
    return (
        <ul className="flex flex-col mt-4 gap-4">
            {links.map((link, index) => {
                const { originalLink, shortLink } = link;
                return (
                    <ShortLink
                        key={index}
                        shortLink={shortLink}
                        originalLink={originalLink}
                    />
                );
            })}
        </ul>
    );
};

export default LinksList;
