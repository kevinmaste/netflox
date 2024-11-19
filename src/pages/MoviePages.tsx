import { useLoaderData } from "react-router-dom";
import { MovieResponse } from "../types/types";
import MoviePagination from "../components/MoviePagination";

const MoviePages = () => {
	const movieList: MovieResponse = useLoaderData() as MovieResponse;
console.log('movie lis :',movieList)
	return (
		<>
			<div>
				<MoviePagination movies={movieList.results} />
			</div>
		</>
	);
};

export default MoviePages;
