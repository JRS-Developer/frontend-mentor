import { useCallback, useEffect, useState } from "react";
import { useTipContext } from "../Context";

const ResetButton = () => {
	const { ResetContext, tipAmount } = useTipContext();
	const [isModifiedContext, setIsModifiedContext] = useState(false);

	const checkMofiedContext = useCallback(() => {
		if (tipAmount === 0) {
			setIsModifiedContext(false);
		} else {
			setIsModifiedContext(true);
		}
	}, [tipAmount]);

	useEffect(() => {
		checkMofiedContext();
	}, [tipAmount, checkMofiedContext]);

	return (
		<button
			onClick={isModifiedContext ? ResetContext : null}
			className={`fw-bolder btn btn--selected btn-full ${
				!isModifiedContext && "btn--disabled"
			}`}
		>
			RESET
		</button>
	);
};

export default ResetButton;
