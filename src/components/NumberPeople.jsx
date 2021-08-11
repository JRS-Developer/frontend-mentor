import { useState } from "react";
import { useTipContext } from "../Context";
import IconPerson from "../images/icon-person.svg";

const NumberPeople = () => {
	const { numberOfPeople, changeNumPeople } = useTipContext();
	const [isChanged, setIsChanged] = useState(false);

	const handleChange = (e) => {
		const value = e.target.value;
		setIsChanged(true);
		changeNumPeople(value);
	};

	return (
		<div className="calculator-section__container">
			<label htmlFor="people">
				<b>Number of people</b>{" "}
				{numberOfPeople !== "" && numberOfPeople < 1 ? (
					<span className="error">Can't be zero</span>
				) : (
					numberOfPeople === "" &&
					isChanged && <span className="error">Can't be empty</span>
				)}
			</label>
			<div className="input-container input-container--icon">
				<img src={IconPerson} alt="Icon Person" />
				<input
					className={`${
						(numberOfPeople === "" && isChanged) ||
						(numberOfPeople < 1 && isChanged)
							? "input--error input-full"
							: "input-full"
					}`}
					dir="rtl"
					type="number"
					onChange={handleChange}
					min={0}
					value={numberOfPeople}
					placeholder="0"
					id="people"
				/>
			</div>
		</div>
	);
};

export default NumberPeople;
