import React from "react";
import SelectTip from "./SelectTip";
import BillAmount from "./BillAmount";
import NumberPeople from "./NumberPeople";

const CalculatorSection = () => {
	return (
		<section className="calculator-section">
			<BillAmount />
			<SelectTip />
			<NumberPeople />
		</section>
	);
};

export default CalculatorSection;
