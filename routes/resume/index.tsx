import { App } from "$components/layouts/_app.tsx";

export default function Resume() {
	return (
		<App header footer>
			<main class="w-full flex flex-col justify-center items-center">
				<span class="text-5xl hover:text-black duration-200 font-bold text-center">Resume</span>
			</main>
		</App>
	);
}
