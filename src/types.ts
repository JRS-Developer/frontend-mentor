export type ActionReducerType =
	| { type: "ADD_FILTER"; payload: string }
	| { type: "REMOVE_FILTER"; payload: string }
	| { type: "CLEAR_FILTER" };
