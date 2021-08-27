import { FeatureCardI } from "../interfaces";
import BrandRecIcon from "../images/icon-brand-recognition.svg";
import DetailedRecIcon from "../images/icon-detailed-records.svg";
import FullyCustomIcon from "../images/icon-fully-customizable.svg";
import FeatureCard from "./FeatureCard";

const Features: FeatureCardI[] = [
    {
        title: "Brand Recognition",
        img: BrandRecIcon,
        desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
        margin: 0,
    },
    {
        title: "Detailed Records",
        img: DetailedRecIcon,
        desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        margin: 1,
    },
    {
        title: "Fully Customizable",
        img: FullyCustomIcon,
        desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement",
        margin: 2,
    },
];

const FeaturesSection = () => {
    return (
        <section className="flex flex-col text-center mt-28 gap-20 px-6 lg:px-40">
            <div>
                <h2 className="text-4xl font-bold mb-4">Advanced Statistics</h2>
                <p className="text-gray-default">
                    Track how your links are performing across the web with{" "}
                    <br />
                    our advanced statistics dashboard.
                </p>
            </div>
            <div className="flex gap-16 md:gap-8 relative flex-col md:flex-row">
                <hr className="absolute left-1/2 md:left-0 md:top-1/2 border-4 border-primary h-full w-auto md:h-auto md:w-full" />
                {Features.map((feature) => {
                    return <FeatureCard {...feature} key={feature.title} />;
                })}
            </div>
        </section>
    );
};

export default FeaturesSection;
