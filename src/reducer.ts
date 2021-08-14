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
	if (newFilterList.length === 0) {
		return { ...initialAppContext };
	} else {
		const newJobItems = getNewJobItems({
			jobItems: initialJobItems,
			filters: newFilterList,
		});
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
	const filtersLength: number = filters.length;

	const newJobItems = jobItems.filter((job) => {
		let matches: boolean[] = [];
		filters.forEach((filter) => {
			if (
				job.languages.includes(filter) ||
				job.tools.includes(filter) ||
				job.role === filter ||
				job.level === filter
			) {
				{
					matches.push(true);
				}
			}
		});
		return matches.length === filtersLength;
	});
	return newJobItems;
};
export default reducer;
