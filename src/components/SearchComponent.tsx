import React, { useState } from "react";
import MoviePagination from "./MoviePagination";
import axios from "axios";
import { options } from "../services/Api";
import { Movie, MovieResponse } from "../types/types";
import Spinner from "./Spinner";

type SearchPros = {
	path: string;
};
const SearchComponent: React.FC<SearchPros> = ({ path }) => {
	const [inputValue, setInputValue] = useState<string>("");
	const [searchFound, setSearchFound] = useState<Movie[] | null>(null);
	const [message, setMessage] = useState<string>("Nothing searching...");
	const [loading, setLoading] = useState<boolean>(false);

	console.log("search foubd :", searchFound);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!inputValue.trim()) {
			setMessage("Veuillez entrer un terme de recherche.");
			setSearchFound(null);
			return;
		}

		setLoading(true);
		setMessage(""); // Efface le message précédent
		try {
			const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=true&language=fr-FR&page=1`;
			const searchReponse = await axios.get(searchUrl, options);
			const dataResponse: MovieResponse = searchReponse.data;

			if (dataResponse.total_results === 0) {
				setMessage("Pas de résultats, cherchez un autre film.");
				setSearchFound(null);
			} else {
				setSearchFound(dataResponse.results);
			}
		} catch (error) {
			console.error(error);
			setMessage("Une erreur s'est produite. Veuillez réessayer.");
		} finally {
			setLoading(false);
		}
		//setLoading(false);
		console.log("the search is about:", inputValue);
	};
	return (
		<div>
			<form onSubmit={handleSubmit} action="" className="flex justify-center  ">
				<input
					type="text"
					value={inputValue}
					placeholder="Recherchez un Film"
					onChange={(e) => setInputValue(e.target.value)}
					className="w-full h-9 px-1 m-2 items-center outline-none lg:w-[75%] border-solid border-2 "
				/>
			</form>
			{}
			<div>
				<Spinner state={loading} />
				{searchFound ? (
					<MoviePagination movies={searchFound} activeLink={path} />
				) : (
					<p className="text-center mt-8">{message}</p>
				)}
			</div>
		</div>
	);
};

export default SearchComponent;
