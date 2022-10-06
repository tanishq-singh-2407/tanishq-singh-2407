import { Options } from "$fresh/plugins/twind.ts";
import { css, apply } from 'twind/css';

const htmlAndBody = css`
	padding: 0;
	margin: 0;

	font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
		"Segoe UI Emoji","Segoe UI Symbol", "Noto Color Emoji";

	min-height: calc(100vh - calc(100vh - 100%));
	height: 100%;
`;

export default {
	selfURL: import.meta.url,
	theme: {
		extend: {
			fontFamily: {
				"awesome": "'Open Sans', sans-serif",
			},
		},
	},
	preflight: {
		"@import":
			"url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap')",
		body: htmlAndBody,	
		html: htmlAndBody
	},
} as Options;
