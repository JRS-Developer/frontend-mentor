import { FeatureCardI } from "../interfaces"
import BrandRecIcon from "../images/icon-brand-recognition.svg";
import DetailedRecIcon from "../images/icon-detailed-records.svg";
import FullyCustomIcon from "../images/icon-fully-customizable.svg"

const Features: FeatureCardI[]= [ 
    {
        title: 'Brand Recognition',
        img: BrandRecIcon,
        desc: "Boost your brand recognition with each click. Generic links don"
    },
     {
        title: 'Brand Recognition',
        img: DetailedRecIcon,
        desc: "Boost your brand recognition with each click. Generic links don"
    },
     {
        title: 'Brand Recognition',
        img: FullyCustomIcon,
        desc: "Boost your brand recognition with each click. Generic links don"
    },

]

const FeaturesSection = () => {
    return (
        <section className="flex flex-col text-center mt-24 gap-4">
            <h2 className="text-2xl font-bold">
                Advanced Statistics
            </h2>
            <p className="text-gray-default">
                Track how your links are performing across the web with our advanced statistics dashboard.
            </p>
            { Features.map(feature => {
                return (
                    <div>Hola</div>
                )
                }) }
        </section>
    )
}

export default FeaturesSection
