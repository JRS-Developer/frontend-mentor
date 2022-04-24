import TipButton from "./TipButton";

const percentagesTip = [
	{ value: "5%" },
	{ value: "10%" },
	{ value: "15%" },
	{ value: "25%" },
	{ value: "50%" },
	{ value: "Custom", editable: true },
];

const SelectTip = () => {
	return (
		<div className="calculator-section__container">
			<label>
				<b>Select Tip %</b>
			</label>
			<div className="select-tip__btn-container">
				{percentagesTip.map((percentage, index) => {
					return (
						<TipButton key={index} index={index} {...percentage} />
					);
				})}
			</div>
		</div>
	);
};

export default SelectTip;
