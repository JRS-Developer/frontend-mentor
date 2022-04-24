import { useEffect, useState } from "react";
import Button from "./Button";

const CopyButton = ({ shortLink }: { shortLink: string }) => {
    const [copy, setCopy] = useState(false);

    const handleClick = async () => {
        await navigator.clipboard.writeText(shortLink);
        setCopy(true);
    };

    useEffect(() => {
        if (copy) setTimeout(() => setCopy(false), 2000);
    }, [copy]);

    return (
        <Button
            onClick={handleClick}
            extraClass={`md:w-32 ${copy && "bg-dark-violet"}`}
            round_style="squared"
        >
            {copy ? "Copied" : "Copy"}
        </Button>
    );
};

export default CopyButton;
