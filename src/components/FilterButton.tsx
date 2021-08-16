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

    const addFilter = () => {
        if (AddFilterContext && title) {
            AddFilterContext(title);
        }
    };

    const removeFilter = () => {
        if (RemoveFilterContext && title) {
            RemoveFilterContext(title);
        }
    };

    return (
        <button
            onClick={removable ? undefined : addFilter}
            className={`flex items-center justify-center gap-2 text-sm rounded-md text-primary  bg-light-g-cyan-tablets overflow-hidden transition-all font-bold ${
                removable
                    ? "pl-2 cursor-default"
                    : "p-2 hover:bg-primary hover:text-white"
            }`}
        >
            {title}
            {removable && (
                <div
                    className="flex items-center justify-center bg-primary hover:bg-very-dark-g-cyan h-full p-2 cursor-pointer transition-all"
                    onClick={removeFilter}
                >
                    <img src={RemoveIcon} alt="Remove Icon" loading="lazy" />
                </div>
            )}
        </button>
    );
};

export default FilterButton;
