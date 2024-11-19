import { useLoaderData } from "react-router-dom";
import { ApiResponse } from "../types/types";
import { motion } from "motion/react";
import { useState } from "react";

const boxVariante = {
	visible: { x: 0, opacity: 1, rotate: 0 },
	hidden: { x: 100, opacity: 0, rotate: 45 },
};
const TestPersonPage = () => {
	const [open, setOpen] = useState(true);
	const data: ApiResponse = useLoaderData() as ApiResponse;

	return (
		<div>
			<p>People connected</p>
			{data.results.map((users, index) => (
				<div key={index} className="bg-red-300">
					<p>{users.name.first} </p>
					<p>{users.email} </p>
				</div>
			))}
			<motion.div
				variants={boxVariante}
				animate={open ? "visible" : "hidden"}
				className="m-6 h-10 w-10 bg-slate-600 flex items-center justify-center"
			>
				1
			</motion.div>
			<button
				className="bg-blue-300 rounded-sm "
				onClick={() => setOpen(!open)}
			>
				animate
			</button>
		</div>
	);
};

/*const Box = forwardRef(({children},ref)=>{
  return <div ref={ref}>{children} </div>
})*/
export default TestPersonPage;
