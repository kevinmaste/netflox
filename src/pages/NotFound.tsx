import { useRouteError } from "react-router-dom";

type DataError = {
	message: string;
};
interface ErrorRoutes {
	status?: string;
	statusText?: string;
	data?: DataError;
}
const NotFound = () => {
	//Take an error
	const error = useRouteError() as ErrorRoutes;

	return (
		<div>
			<p> {error?.status || error?.toString()} </p>
		</div>
	);
};

export default NotFound;
