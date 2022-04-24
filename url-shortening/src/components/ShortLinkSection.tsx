import { useEffect, useState } from "react";
import { ShortLinkI } from "../interfaces";
import LinksList from "./LinksList";
import ShortLinkInput from "./ShortLinkInput";

const ShortLinkSection = () => {
    const [links, setLinks] = useState<ShortLinkI[]>([]);

    const getStorageLinks = () => {
        const storage = localStorage.getItem('links')
        if (typeof storage === 'string') {
            const links: ShortLinkI[] = JSON.parse(storage)
            return links
        }
        return []
    }

    useEffect(() => {
        setLinks(
            getStorageLinks()
        )
    }, []);

    return (
        <div data-aos="fade-up" className="px-6 lg:px-40 -mt-16">
            <ShortLinkInput setLinks={setLinks} />
            <LinksList links={links} />
        </div>
    );
};

export default ShortLinkSection;
