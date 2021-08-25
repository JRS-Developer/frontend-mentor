import { urlI } from "../interfaces";

const A = ({ link, text, blank }: urlI) => {
    if (blank) {
        return (
            <a href={link} className={`${linkClassNames}`}>
                {text}
            </a>
        );
    } else {
        return (
            <a
                href={link}
                className={`${linkClassNames}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {text}
            </a>
        );
    }
};

const linkClassNames = `opacity-50 hover:opacity-100`;

export default A;
