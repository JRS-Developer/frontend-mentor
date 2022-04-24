import { ReactComponent as Logo } from "../images/logoWhite.svg";
import { ReactComponent as FBIcon } from "../images/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../images/icon-twitter.svg";
import { ReactComponent as PinIcon } from "../images/icon-pinterest.svg";
import { ReactComponent as InstaIcon } from "../images/icon-instagram.svg";

const FooterLinks = [
    {
        title: "Features",
        links: ["Link Shortening", "Branded Links", "Analytics"],
    },

    {
        title: "Recourses",
        links: ["Blog", "Developers", "Support"],
    },

    {
        title: "Company",
        links: ["About", "Our team", "Careers", "Contact"],
    },
];

const Footer = () => {
    return (
        <footer className="bg-dark-violet flex flex-col items-center py-12 gap-8 md:py-16 lg:px-40 md:items-start md:grid-cols-1-2-1 md:justify-end md:grid">
            <Logo />
            <div className="text-center md:text-auto flex flex-col gap-4 md:flex-row md:text-left md:gap-12 md:justify-end">
                {FooterLinks.map((footerLink) => {
                    const { title, links } = footerLink;
                    return (
                        <div key={title}>
                            <h3 className="text-white mb-4 font-bold">
                                {title}
                            </h3>
                            {links.map((link) => (
                                <p
                                    className="text-gray-default hover:text-primary transition-all md:w-max text-base mb-2"
                                    key={link}
                                >
                                    {link}
                                </p>
                            ))}
                        </div>
                    );
                })}
            </div>
            <div className="flex gap-4 items-center justify-center md:justify-end">
                <FBIcon className="icon-green" />
                <TwitterIcon className="icon-green" />
                <PinIcon className="icon-green" />
                <InstaIcon className="icon-green" />
            </div>
        </footer>
    );
};

export default Footer;
