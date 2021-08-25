import Button from "./Button";
import Illustration from "../images/illustration-working.svg";

const Hero = () => {
	return (
		<section className="flex mt-16 lg:pl-40 pl-6 flex-col-reverse md:flex-row bg-white pb-40">
			<div className="text-center md:text-left grid md:block justify-items-center pr-6">
				<h2 className="text-7x leading-super-tight font-bold mt-8 md:mt-0">
					More than just shorter links
				</h2>
				<p className="text-gray-default mt-2 md:mt-0">
					Build your brand's recognition and get detailed <br />
					insights on how your links are performing
				</p>
				<Button extraClass="mt-8">Get Started</Button>
			</div>
			<div>
				<img src={Illustration} alt="Illustration" className="ml-4" />
			</div>
		</section>
	);
};

export default Hero;
