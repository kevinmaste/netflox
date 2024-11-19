import React, { useEffect, useState } from "react";
import { options } from "../services/Api";
import axios from "axios";
import { Video, VideoResponse } from "../types/types";

interface ModalProps {
	open?: boolean;
	movieId: number;
	close: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ movieId, close }) => {
	//const id = 912649;
	const [videoKey, setVideoKey] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const apiGet = await axios.get(
					`https://api.themoviedb.org/3/movie/${movieId}/videos`,
					options
				);
				const res: VideoResponse = apiGet.data;

				const trailerVideo = filterTrailers(res.results);

				const youtubeKey = trailerVideo[0].key;

				setVideoKey(youtubeKey);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [movieId]);

	const filterTrailers = (videos: Video[]) => {
		return videos.filter(
			(video) => video.type === "Trailer" && video.site === "YouTube"
		);
	};
	return (
		<div className="flex justify-center">
			<div className="fixed inset-0 flex flex-col items-center justify-center bg-opacity-10 p-2">
				<div className="justify-start w-[90%] mb-1" onClick={close}>
					{/** bouton a voir */}
					<span className=" bg-slate-500 p-1 rounded-[50%] text-[8px] lg:text-[10px] hover:bg-red-700 hover:cursor-pointer">
						x
					</span>
				</div>
				<iframe
					src={`https://www.youtube.com/embed/${videoKey}`}
					className="w-[90%] aspect-video"
				></iframe>
			</div>
		</div>
	);
};

export default ModalComponent;
