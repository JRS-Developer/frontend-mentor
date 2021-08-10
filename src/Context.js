import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const initialContextState = {
	selectedTip: {
		index: null,
		value: 0,
	},
	numberOfPeople: "",
	tipAmount: 0.0,
	totalAmount: 0.0,
	billAmount: "",
};

const TipContext = React.createContext(initialContextState);

const TipContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialContextState);

	const setSelectedTip = (selected) => {
		dispatch({ type: "CHANGE_SELECTED", payload: selected });
	};

	const ResetContext = () => {
		dispatch({ type: "RESET" });
	};

	const changeBill = (amount) => {
		dispatch({ type: "CHANGE_BILL", payload: amount });
	};

	const changeNumPeople = (amount) => {
		dispatch({ type: "CHANGE_PEOPLE", payload: amount });
	};

	return (
		<TipContext.Provider
			value={{
				...state,
				ResetContext,
				setSelectedTip,
				changeNumPeople,
				changeBill,
			}}
		>
			{children}
		</TipContext.Provider>
	);
};

const useTipContext = () => {
	return useContext(TipContext);
};

export { useTipContext, TipContextProvider, initialContextState };
