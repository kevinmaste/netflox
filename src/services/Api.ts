const apiKey = import.meta.env.VITE_API_KEY;

export const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${apiKey}`,
	},
};

export const urlLinkxs =
	"https://api.themoviedb.org/3/movie/now_playing?language=fr-FR";

/*'https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1'
'https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1'*/
