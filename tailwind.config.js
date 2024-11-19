/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}", // Tous les fichiers source dans src/
	],
	theme: {
		extend: {
			colors: {
				"text-navigate": "var(--text-color-navigate)",
				"text-content": "var(--text-color-content)",
				"text-title": "var(--text-color-title)",
			},
			fontFamily: {
				inter: "var(--font-inter)",
				jaro: "var(--font-jaro)",
			},
			fontSize: {
				"text-base": "var(--text-font-size)",
				"text-1": "var(--text-font-size-1)",
				"header-1": "var(--text-font-1)",
				"header-2": "var(--text-font-2)",
				navigate: "var(--text-font-navigate)",
				"h-navigate": "var(--text-font-h-navigate)",
				title: "var(--text-font-size-2)",
			},
			screens: {
				xs: "375px",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
