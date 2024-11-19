import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Header = () => {
	const [curentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const formatHour = (time: Date) =>
		time.toLocaleString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});

	const getTheDate = (time: Date) => {
		const days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		const monthsShort = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];

		const dayWeek = days[time.getDay()];
		const month = monthsShort[time.getMonth()];
		const day = time.getDate();
		return dayWeek + " " + month + " " + day;
	};

	return (
		<div className="flex justify-between items-center px-4 mb-11">
			<div className="sm:hidden md:hidden xs:hidden">
				{" "}
				{/**burger menu */} <HiOutlineMenuAlt2 size={39} />
			</div>
			<div>
				{" "}
				{/* title*/}
				<span className="font-jaro text-text-title text-title">Netflox</span>
			</div>
			<div className="flex flex-col">
				{" "}
				{/** Hour and day */}
				<span className="text-header-1 sm:text-sm md:text-base xs:text-sm">
					{formatHour(curentTime)}
				</span>
				<span className="text-header-2 sm:text-sx md:text-sm xs:text-xs">
					{" "}
					{getTheDate(curentTime)}{" "}
				</span>
			</div>
		</div>
	);
};

export default Header;
