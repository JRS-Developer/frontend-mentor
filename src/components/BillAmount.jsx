import React from "react";
import { useTipContext } from "../Context";

const BillAmount = () => {
	const { billAmount, changeBill } = useTipContext();

	const handleChange = (e) => {
		const { value } = e.target;
		changeBill(value);
	};

	return (
		<div>
			<h1>Bill</h1>
			<input
				type="number"
				min={0}
				value={billAmount}
				onChange={handleChange}
				placeholder="0"
			/>
		</div>
	);
};

export default BillAmount;
