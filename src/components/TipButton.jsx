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

	return (
		<div
			style={selectedTip.index === index ? { background: "red" } : null}
			onClick={changeSelectedTip}
		>
			{editing ? (
				<input
					type="number"
					value={inputValue}
					autoFocus
					onChange={(e) => setInputValue(e.target.value)}
					onBlur={(e) => handleOnBlur(e)}
					min={0}
				/>
			) : (
				<p onClick={editable ? changeEditing : null}>
					{editable ? inputValue : value}
				</p>
			)}
		</div>
	);
};

export default TipButton;
