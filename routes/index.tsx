import { App } from "$components/layouts/_app.tsx";

export default function Home() {
	return (
		<App header footer>
			<main class="w-full flex justify-center items-center">
				<div class="flex flex-col justify-center items-center gap-3">
					<span class="text-5xl text-[#333333] hover:text-black duration-200 font-bold text-center tracking-widest">
						TANISHQ SINGH
					</span>
					<span class="text-xs font-medium text-[#887]">
						seems minimal to me.
					</span>
				</div>
			</main>
		</App>
	);
}
