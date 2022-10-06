import { Header } from "../components/header/index.ts";

export default function Home() {
	return (
		<div class="h-screen w-full text-[#333333]">
			<Header />

			<main class="h-full w-full flex justify-center items-center">
				<a
					href="https://github.com/tanishq-singh-2301"
					target="_blank"
					rel="noopener"
					class="text-5xl hover:text-black duration-200 font-bold text-center"
				>
					TANISHQ SINGH
				</a>
			</main>
		</div>
	);
}
