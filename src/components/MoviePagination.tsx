import React from "react";
import { MovieListProps } from "../types/types";
import MoviesCards from "./MoviesCards";
import { motion } from "motion/react";

const MoviePagination: React.FC<MovieListProps> = ({ movies, activeLink }) => {
	return (
		<motion.div
			style={{ scrollSnapType: "x mandatory" }}
			className="flex gap-4 overflow-x-scroll py-4 px-2 scrollbar-hide"
		>
			{movies.map((movie) => (
				<motion.div
					key={movie.id}
					className="min-w-[150px] xs:min-w-[100px] sm:min-w-[250px] h-[230px] xs:h-[170px] sm:h-[380px] flex-shrink-0 overflow-hidden bg-gray-800 rounded-lg shadow-lg"
					style={{ scrollSnapAlign: "center" }}
				>
					<MoviesCards movie={movie} actuelParams={activeLink} />
				</motion.div>
			))}
		</motion.div>
	);
};

export default MoviePagination;
