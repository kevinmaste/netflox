import React from "react";
import { ImSpinner9 } from "react-icons/im";

type SpinnerProps = {
	state: boolean;
};

const Spinner: React.FC<SpinnerProps> = ({ state }) => {
	const valBoolean = state;
	return (
		<>
			{valBoolean ? (
				<>
					<div className="flex justify-center p-3">
						<ImSpinner9 size={59} className="animate-spin" color="purple" />
					</div>
				</>
			) : null}
		</>
	);
};

export default Spinner;
