import React from "react";
import { useTipContext } from "../Context";

const TotalSection = () => {
	const { tipAmount, totalAmount, ResetContext } = useTipContext();

	return (
		<div>
			<h1>Tip amount</h1>
			<p>{tipAmount}</p>
			<h1>Total</h1>
			<p>{totalAmount}</p>
			<button onClick={ResetContext}>Reset</button>
		</div>
	);
};

export default TotalSection;
