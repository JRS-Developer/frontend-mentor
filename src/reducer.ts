import { AppContextInterface, JobInterface } from "./Interfaces";
import { ActionReducerType } from "./types";
import { initialAppContext } from "./Context";

const reducer = (
	state: AppContextInterface,
	action: ActionReducerType
): AppContextInterface => {
	switch (action.type) {
		case "ADD_FILTER": {
			const newFilter = action.payload;
			if (isFilterInList(newFilter, state.filters)) {
				return { ...state };
			} else {
				const newFilterList = [...state.filters, newFilter];
				return createNewState(
					state,
					newFilterList,
					initialAppContext.jobItems
				);
			}
		}
		case "REMOVE_FILTER": {
			const filterToRemove = action.payload;
			const newFilterList = state.filters.filter((item) => {
				return item !== filterToRemove;
			});
			return createNewState(
				state,
				newFilterList,
				initialAppContext.jobItems
			);
		}
		case "CLEAR_FILTER": {
			return { ...initialAppContext };
		}
		default: {
			return { ...state };
		}
	}
};

const createNewState = (
	state: AppContextInterface,
	newFilterList: string[],
	initialJobItems: JobInterface[]
): AppContextInterface => {
	const newJobItems = getNewJobItems({
		jobItems: initialJobItems,
		filters: newFilterList,
	});
	if (newFilterList.length === 0) {
		return { ...initialAppContext };
	} else {
		return { ...state, jobItems: newJobItems, filters: newFilterList };
	}
};

const isFilterInList = (filter: string, list: string[]): boolean => {
	let response = list.filter((item) => {
		return item === filter;
	});
	return response.length > 0;
};

const getNewJobItems = ({
	jobItems,
	filters,
}: AppContextInterface): JobInterface[] => {
	// Primer intento
	// const newJobItems = jobItems.filter((job) => {
	// 	let response: boolean[] = [];
	// 	response.push(checkIfIncludes(job.languages, filters));
	// 	response.push(checkIfIncludes(job.tools, filters));
	// 	response.push(checkIfIncludes(job.role, filters));
	// 	response.push(checkIfIncludes(job.level, filters));
	// 	console.log(response);
	// 	return response.every((r) => r === true);
	// });
	// return newJobItems;
	// Segundo intento
	// let newJobItems: JobInterface[] = [];
	// filters.forEach((filter) => {
	// 	newJobItems = [
	// 		...newJobItems,
	// 		...jobItems.filter((job) => {
	// 			if (
	// 				job.languages.includes(filter) ||
	// 				job.tools.includes(filter) ||
	// 				job.role === filter ||
	// 				job.level === filter
	// 			) {
	// 				return true;
	// 			} else {
	// 				return false;
	// 			}
	// 		}),
	// 	];
	// });
	// return newJobItems;

	return jobItems;
};
export default reducer;
