import { initialContextState } from "./Context";

const reducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_SELECTED": {
			const selectedTip = action.payload;
			const [tipAmount, totalAmount] = calculateTipAndTotal({
				...state,
				selectedTip,
			});
			return {
				...state,
				selectedTip,
				tipAmount,
				totalAmount,
			};
		}
		case "CHANGE_PEOPLE": {
			const numberOfPeople = convertNegativeValue(action.payload);
			const [tipAmount, totalAmount] = calculateTipAndTotal({
				...state,
				numberOfPeople,
			});
			return {
				...state,
				numberOfPeople,
				tipAmount,
				totalAmount,
			};
		}
		case "CHANGE_BILL": {
			const billAmount = action.payload;
			const [tipAmount, totalAmount] = calculateTipAndTotal({
				...state,
				billAmount,
			});
			return {
				...state,
				billAmount,
				tipAmount,
				totalAmount,
			};
		}
		case "RESET": {
			return { ...initialContextState };
		}
		default: {
			return { ...state };
		}
	}
};

// Principal functions

const calculateTipAndTotal = ({
	billAmount,
	numberOfPeople,
	selectedTip: { value: tipValue },
}) => {
	let tipByPerson = 0.0;
	let totalByPerson = 0.0;
	if (Number(numberOfPeople) < 1 || Number(tipValue) < 1) {
		return [tipByPerson, totalByPerson];
	} else {
		tipValue = Number(removePercentageSign(tipValue));
		billAmount = Number(replaceCommasWithPeriods(billAmount.toString()));

		tipByPerson = calculateTipByPerson(
			billAmount,
			tipValue,
			numberOfPeople
		);
		totalByPerson = calculateTotalByPerson(
			billAmount,
			Number(tipByPerson),
			Number(numberOfPeople)
		);

		tipByPerson = checkIsNaN(tipByPerson);
		totalByPerson = checkIsNaN(totalByPerson);

		return [tipByPerson, totalByPerson];
	}
};

const calculateTipByPerson = (billAmount, tipValue, numberOfPeople) => {
	return parseFloat((billAmount * tipValue) / 100 / numberOfPeople).toFixed(
		2
	);
};

const calculateTotalByPerson = (billAmount, tipByPerson, numberOfPeople) => {
	return parseFloat(billAmount / numberOfPeople + tipByPerson).toFixed(2);
};

// Helpers

const removePercentageSign = (string) => {
	const regex = /%/g;
	return string.replace(regex, "");
};

const replaceCommasWithPeriods = (string) => {
	const regex = /,/g;
	return string.replace(regex, ".");
};

const convertNegativeValue = (value) => {
	return value < 0 ? 0 : value;
};

const checkIsNaN = (value) => {
	return isNaN(value) ? 0 : value;
};

export default reducer;
