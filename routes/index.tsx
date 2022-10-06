import { App } from "$components/layouts/_app.tsx";

export default function Home() {
	return (
		<App>
			<main class="w-full flex justify-center items-center">
				<div class="flex flex-col justify-center items-center gap-3">
					<a
						href="https://github.com/tanishq-singh-2301"
						target="_blank"
						rel="noopener"
						class="text-5xl hover:text-black duration-200 font-bold text-center"
					>
						TANISHQ SINGH
					</a>
					<span class="text-xs font-medium text-[#887]">seems minimal to me.</span>
				</div>
			</main>
		</App>
	);
}
