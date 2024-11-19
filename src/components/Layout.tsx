import { WrapperProps } from "../types/types";
import Header from "./Header";
import NavigationHeader from "./NavigationHeader";

const Layout: React.FC<WrapperProps> = ({ children }) => {
	return (
		<div className="contain-content">
			<Header />
			<NavigationHeader />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
