import Layout from "../components/Layout";
import { Outlet, useNavigation } from "react-router-dom";

const Page = () => {
	const { state } = useNavigation();
	return (
		<Layout>
			{state === "loading" ? <span>Loadding ...</span> : null}
			{state !== "loading" && <Outlet />}
		</Layout>
	);
};

export default Page;
