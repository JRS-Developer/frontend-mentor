import { FeatureCardI } from "../interfaces";

const FeatureCard = ({ img, title, desc, margin }: FeatureCardI) => {
    return (
        <div
            className={`bg-white h-max p-8 flex flex-col items-center md:items-start gap-4 z-10 rounded-sm  mt-0 md:mt-${margin ? margin * 8 : 0
                } `}
        >
            <div className="bg-primary-alt rounded-full p-4 w-max -mt-12">
                <img src={img} alt={title} />
            </div>
            <div className="text-center md:text-left">
                <h3 className="font-bold mb-4">{title}</h3>
                <p className="text-gray-default text-sm">{desc}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
