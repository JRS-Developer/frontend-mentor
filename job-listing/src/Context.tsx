import { createContext, ReactNode, useContext, useReducer } from "react";
import { AppContextInterface } from "./Interfaces";
import jobs from "./data.json";
import reducer from "./reducer";

const initialAppContext = {
	jobItems: jobs,
	filters: [],
};

const AppContext = createContext<AppContextInterface>(initialAppContext);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialAppContext);

	const AddFilterContext = (title: string | null) => {
		if (title) {
			dispatch({ type: "ADD_FILTER", payload: title });
		}
	};

	const RemoveFilterContext = (title: string | null) => {
		if (title) {
			dispatch({ type: "REMOVE_FILTER", payload: title });
		}
	};

	const ClearFilterContext = () => {
		dispatch({ type: "CLEAR_FILTER" });
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				AddFilterContext,
				RemoveFilterContext,
				ClearFilterContext,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = (): AppContextInterface => {
	return useContext(AppContext);
};

export { useAppContext, AppContextProvider, initialAppContext };
