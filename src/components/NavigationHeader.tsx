import { NavLink } from "react-router-dom";

interface NavigationArrow {
	source?: string;
	title: string;
}

const navArrow: NavigationArrow[] = [
	{
		source: "/",
		title: "Movies",
	},
	{
		source: "/Shows",
		title: "Shows",
	},
	{
		source: "/search",
		title: "Search",
	},
	{
		source: "/person",
		title: "Person",
	},
];
const NavigationHeader = () => {
	return (
		<div className="my-8 flex justify-center ">
			{navArrow.map((navigate, index) => (
				<NavLink
					to={navigate.source || "/"}
					key={index}
					className={({ isActive }) =>
						"font-inter text-text-navigate text-navigate m-4 transition-transform transform hover:scale-150 hover:-translate-y-2 xs:text-base" +
						(isActive
							? "text-blue-500 border-b-2 border-blue-500 scale-y-125 xs:scale-y-90Ò"
							: "")
					}
				>
					{navigate.title}
				</NavLink>
			))}
		</div>
	);
};

export default NavigationHeader;
