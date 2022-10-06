import { Header } from "../components/header/index.ts";

export default function Resume() {
	return (
		<div class="h-screen w-full text-[#333333]">
			<Header />

			<main class="h-full w-full flex justify-center items-center">
				<span class="text-5xl hover:text-black duration-200 font-bold text-center">
					Resume
				</span>
			</main>
		</div>
	);
}
