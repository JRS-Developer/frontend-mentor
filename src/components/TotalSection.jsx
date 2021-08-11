import React from "react";
import { useTipContext } from "../Context";
import ResetButton from "./ResetButton";
import TotalSectionText from "./TotalSectionText";

const TotalSection = () => {
	const { tipAmount, totalAmount } = useTipContext();

	const texts = [
		{
			title: "Tip Amount",
			hoverTitle: "Bill x Selected Tip / People",
			amount: tipAmount,
		},
		{
			title: "Total",
			hoverTitle: "Bill x Selected Tip / People + Tip Amount",
			amount: totalAmount,
		},
	];

	return (
		<section className="total-section">
			<div className="total-section__text-container">
				{texts.map((text, index) => (
					<TotalSectionText
						key={`${text.title}-${index}`}
						{...text}
					/>
				))}
			</div>
			<ResetButton />
		</section>
	);
};

export default TotalSection;
