export interface WrapperProps {
	children: React.ReactNode;
}

//api Test response
interface Name {
	title: string;
	first: string;
	last: string;
}

interface Location {
	street: {
		number: number;
		name: string;
	};
	city: string;
	state: string;
	country: string;
	postcode: number | string;
	coordinates: {
		latitude: string;
		longitude: string;
	};
	timezone: {
		offset: string;
		description: string;
	};
}

interface Person {
	gender: string;
	name: Name;
	location: Location;
	email: string;
	dob: {
		date: string;
		age: number;
	};
	phone: string;
	cell: string;
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
	nat: string;
}

export interface ApiResponse {
	results: Person[];
}

//Movie API response

// Interface principale pour les données de réponse
export interface MovieResponse {
	dates?: {
		maximum: string; // Date maximale (YYYY-MM-DD)
		minimum: string; // Date minimale (YYYY-MM-DD)
	};
	page: number; // Numéro de page actuelle
	results: Movie[]; // Tableau contenant les films
	total_pages?: number;
	total_results?: number;
}

// Interface pour un film individuel
export interface Movie {
	adult: boolean; // Indique si le film est destiné aux adultes
	backdrop_path: string; // Chemin de l'image de fond
	genre_ids: number[]; // Tableau des identifiants des genres
	id: number; // ID unique du film
	original_language: string; // Langue originale (e.g., "en", "fr")
	original_title: string; // Titre original
	overview: string; // Description du film
	popularity: number; // Indice de popularité
	poster_path: string; // Chemin de l'affiche du film
	release_date: string; // Date de sortie (YYYY-MM-DD)
	title: string; // Titre du film
	video: boolean; // Indique si c'est une vidéo
	vote_average: number; // Note moyenne des votes
	vote_count: number; // Nombre de votes
}

export interface MovieProps {
	movie: Movie;
	actuelParams?: string;
}

export interface MovieListProps {
	movies: Movie[];
	activeLink?: string;
}

//Video api response

// Interface pour une seule vidéo
export interface Video {
	id: string; // Identifiant unique de la vidéo
	iso_639_1: string; // Code de langue (ISO 639-1)
	iso_3166_1: string; // Code de région (ISO 3166-1)
	key: string; // Clé de la vidéo (par ex. pour YouTube ou Vimeo)
	name: string; // Nom de la vidéo
	site: string; // Site d'hébergement de la vidéo (YouTube, Vimeo, etc.)
	size: number; // Taille ou qualité de la vidéo (par ex. 720, 1080)
	type: string; // Type de la vidéo (Trailer, Clip, Featurette, etc.)
	official: boolean; // Indique si la vidéo est officielle ou non
	published_at: string; // Date de publication au format ISO 8601
}

// Interface pour la réponse complète des vidéos
export interface VideoResponse {
	id: number; // Identifiant du film ou de la série
	results: Video[]; // Liste des vidéos associées
}
