import React from "react";
import { useTipContext } from "../Context";
import IconDollar from "../images/icon-dollar.svg";

const BillAmount = () => {
	const { billAmount, changeBill } = useTipContext();

	const handleChange = (e) => {
		const { value } = e.target;
		changeBill(value);
	};

	return (
		<div className="calculator-section__container">
			<label htmlFor="bill_amount">
				<b>Bill</b>
			</label>
			<div className="input-container input-container--icon">
				<img src={IconDollar} alt="Icon dollar" />
				<input
					className="input-full"
					dir="rtl"
					type="number"
					min={0}
					value={billAmount}
					onChange={handleChange}
					placeholder="0"
					id="bill_amount"
				/>
			</div>
		</div>
	);
};

export default BillAmount;
