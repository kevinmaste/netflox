import { useState } from "react";
import { MovieProps } from "../types/types";
import ModalComponent from "./ModalComponent";

const MoviesCards: React.FC<MovieProps> = ({ movie, actuelParams }) => {
	const [isVisible, setIsVisible] = useState(false);

	const handleToogle = () => {
		setIsVisible(true);
	};
	const closeToogle = () => {
		setIsVisible(!isVisible);
	};
	return (
		<>
			{actuelParams === "/Shows" || actuelParams === "/search" ? (
				<>
					<div className="flex">
						<div className="w-[150px] h-[230px] xs:w-[100px] xs:h-[180px] sm:w-[250px] sm:h-[380px]">
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.title}
								className="w-full h-full object-cover rounded-lg"
							/>
						</div>
						{/**here will be the description part etc.. */}
						<div className="flex flex-col justify-evenly bg-text-title h-auto w-[300px] p-3">
							<h2 className="text-text-1 font-inter xs:text-sm sm:text-base font-semibold truncate">
								{movie.title}
							</h2>
							<p className="text-sm text-blue-300 xs:text-xs sm:text-sm truncate">
								Sortie : {movie.release_date}
							</p>
							<p className="mt-2 text-gray-300 text-sm text-balance xs:text-xs sm:text-sm truncate line-clamp-2">
								{movie.overview}...
							</p>
							<div className="mt-3 flex" onClick={handleToogle}>
								<span className="bg-blue-400 p-2 rtext-[10px] xs:text-xs sm:text-sm px-2 py-1 rounded hover:bg-blue-600  hover:cursor-pointer">
									Play
								</span>
							</div>
							<div className="flex justify-between items-center mt-4">
								<span className="text-white text-sm">
									Votes: {movie.vote_count}
								</span>
								<span className="font-inter text-white text-2xl px-2 py-1 rounde xs:text-sm sm:text-sm">
									{movie.vote_average}/<span className="text-xs">10</span>
								</span>
							</div>
						</div>
					</div>
					{isVisible && (
						<ModalComponent movieId={movie.id} close={closeToogle} />
					)}
				</>
			) : (
				<>
					<div className="w-full h-full">
						<img
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt={movie.title}
							className="rounded-md w-full h-full object-cover"
						/>

						{/**here will be the description part etc.. */}
						{/*<div>
				<h2 className="text-xl font-bold text-neutral-900">{movie.title}</h2>
				<p className="text-sm text-gray-400">Sortie : {movie.release_date}</p>
				<p className="mt-2 text-gray-300 text-sm">{movie.overview}...</p>
				<div className="flex justify-between items-center mt-4">
					<span className="bg-green-500 text-xs px-2 py-1 rounded">
						⭐ {movie.vote_average}
					</span>
					<span className="text-gray-400 text-xs">
						Votes : {movie.vote_count}
					</span>
				</div>
			</div>*/}
					</div>
				</>
			)}
		</>
	);
};

export default MoviesCards;
