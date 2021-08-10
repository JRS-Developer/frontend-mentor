import { useState } from "react";
import { useTipContext } from "../Context";

const NumberPeople = () => {
	const { numberOfPeople, changeNumPeople } = useTipContext();
	const [isChanged, setIsChanged] = useState(false);

	const handleChange = (e) => {
		const value = e.target.value;
		setIsChanged(true);
		changeNumPeople(value);
	};

	return (
		<div>
			<h1>Number of people</h1>
			{numberOfPeople !== "" && numberOfPeople < 1 ? (
				<p>Can't be zero</p>
			) : (
				numberOfPeople === "" && isChanged && <p>Can't be empty</p>
			)}
			<input
				type="number"
				onChange={handleChange}
				min={0}
				value={numberOfPeople}
				placeholder="0"
			/>
		</div>
	);
};

export default NumberPeople;
