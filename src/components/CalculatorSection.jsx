import React from "react";
import SelectTip from "./SelectTip";
import BillAmount from "./BillAmount";
import NumberPeople from "./NumberPeople";

const CalculatorSection = () => {
	return (
		<div className="calculator-section">
			<BillAmount />
			<SelectTip />
			<NumberPeople />
		</div>
	);
};

export default CalculatorSection;
