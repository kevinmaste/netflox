import SearchComponent from "../components/SearchComponent";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
	const path = useLocation();
	return (
		<div>
			<SearchComponent path={path.pathname} />
		</div>
	);
};

export default SearchPage;
