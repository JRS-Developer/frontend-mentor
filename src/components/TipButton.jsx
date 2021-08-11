import { useState } from "react";
import { useTipContext } from "../Context";

const TipButton = ({ value = 0, index, editable = false }) => {
	const [editing, setEditing] = useState(false);
	const [inputValue, setInputValue] = useState(value);
	const { selectedTip, setSelectedTip } = useTipContext();

	const changeEditing = () => {
		setEditing(true);
	};

	const handleOnBlur = (e) => {
		let { value } = e.target;
		value = value === "" ? 0 : value;

		setEditing(false);
		setInputValue(value);
		changeSelectedTip();
	};

	const changeSelectedTip = () => {
		setSelectedTip({ value: inputValue, index });
	};

	if (editing) {
		return (
			<div>
				<input
					className="input-full"
					dir="rtl"
					type="number"
					value={inputValue}
					autoFocus
					onChange={(e) => setInputValue(e.target.value)}
					onBlur={(e) => handleOnBlur(e)}
					min={0}
				/>
			</div>
		);
	} else {
		return (
			<button
				className={`btn ${
					selectedTip.index === index ? "btn--selected" : null
				} ${editable && "btn-custom"}`}
				onClick={() => {
					changeSelectedTip();
					if (editable) {
						changeEditing();
					}
				}}
			>
				{editable
					? isNaN(Number(inputValue))
						? inputValue
						: `${inputValue}%`
					: value}
			</button>
		);
	}
};

export default TipButton;
