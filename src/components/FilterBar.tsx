import { useAppContext } from "../Context";
import FilterButton from "./FilterButton";

const FilterBar = () => {
	const { filters, ClearFilterContext } = useAppContext();
	const handleClick = () => {
		if (ClearFilterContext) ClearFilterContext();
	};

	if (filters.length > 0) {
		return (
			<div>
				{filters.map((filter) => {
					return (
						<FilterButton
							title={filter}
							key={filter}
							removable={true}
						/>
					);
				})}
				<button onClick={handleClick}>Clear</button>
			</div>
		);
	} else {
		return null;
	}
};

export default FilterBar;
