import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviePages from "./pages/MoviePages";
import NotFound from "./pages/NotFound";
import Page from "./pages/Page";
import ShowsPages from "./pages/ShowsPages";
import TestPersonPage from "./pages/TestPersonPage";
import { fetchApi } from "./services/ApiServiceLoader";
import SearchPage from "./pages/SearchPage";

//fetch("https://randomuser.me/api/"),

const router = createBrowserRouter([
	{
		path: "/",
		element: <Page />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <MoviePages />,
				loader: fetchApi,
			},
			{
				path: "Shows",
				element: <ShowsPages />,
				loader: fetchApi,
			},
			{
				path: "search",
				element: <SearchPage />,
				loader: fetchApi,
			},
			{
				path: "person",
				element: <TestPersonPage />,
				loader: () => fetch("https://randomuser.me/api/"),
			},
		],
	}
]);
function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
