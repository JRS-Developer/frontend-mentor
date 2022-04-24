export interface AppContextInterface {
	jobItems: JobInterface[];
	filters: string[];
	AddFilterContext?: (title: string | null) => void;
	RemoveFilterContext?: (title: string | null) => void;
	ClearFilterContext?: () => void;
}

export interface JobInterface {
	id: number;
	company: string;
	logo: string;
	new: boolean;
	featured: boolean;
	position: string;
	role: string;
	level: string;
	postedAt: string;
	contract: string;
	location: string;
	languages: string[];
	tools: string[];
}
