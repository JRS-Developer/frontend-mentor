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
		<div>
			<h1>Select Tip %</h1>
			{percentagesTip.map((percentage, index) => {
				return <TipButton key={index} index={index} {...percentage} />;
			})}
		</div>
	);
};

export default SelectTip;
