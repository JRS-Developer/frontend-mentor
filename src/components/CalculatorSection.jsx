import React from "react";
import SelectTip from "./SelectTip";
import BillAmount from "./BillAmount";
import NumberPeople from "./NumberPeople";

const CalculatorSection = () => {
	return (
		<div>
			<BillAmount />
			<SelectTip />
			<NumberPeople />
		</div>
	);
};

export default CalculatorSection;
