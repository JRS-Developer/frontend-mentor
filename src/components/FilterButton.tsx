import { MouseEvent } from "react";
import { useAppContext } from "../Context";
import RemoveIcon from "../images/icon-remove.svg";

const FilterButton = ({
	title,
	removable = false,
}: {
	title: string | undefined;
	removable?: boolean;
}) => {
	const { AddFilterContext, RemoveFilterContext } = useAppContext();

	const addFilter = (e: MouseEvent) => {
		const target = e.target as HTMLButtonElement;
		if (AddFilterContext) {
			AddFilterContext(target.textContent);
		}
	};

	const removeFilter = (e: MouseEvent) => {
		const target = e.target as HTMLButtonElement;
		if (RemoveFilterContext) {
			RemoveFilterContext(target.textContent);
		}
	};

	return (
		<button onClick={removable ? removeFilter : addFilter}>
			{title}
			{removable && (
				<img src={RemoveIcon} alt="Remove Icon" loading="lazy" />
			)}
		</button>
	);
};

export default FilterButton;
