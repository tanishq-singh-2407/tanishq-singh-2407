import { Options } from "$fresh/plugins/twind.ts";
import { css } from "twind/css";

const globalStyle = await Deno.readTextFile("styles/global.css");

const options: Options = {
	selfURL: import.meta.url,
	theme: {
		extend: {
			fontFamily: {
				'montserrat': "'Montserrat', sans-serif"
			}
		}
	},
	preflight: {
		"@import":[
			"url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap')",
			"url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')",
		],
		"@global": css`${globalStyle}`,
	},
};

export default options;
