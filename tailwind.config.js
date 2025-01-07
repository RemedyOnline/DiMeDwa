/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"theme-color": "#004739",
				highlight: "#CDE5D5",
				hoverBG: "#138667",
				inputBG: "#EAF2EC",
				inputRing: "#0E345A20",
			},
			animation: {
				bounce: "bounce 2s infinite ease-in-out",
				ping: "ping 1s infinite ease-in-out",
			},
		},
	},
	plugins: [],
};
