import { App } from "$components/layouts/_app.tsx";

export default function Resume() {
	return (
		<App header footer>
			<main class="flex-1 w-full flex flex-col justify-start items-center px-3">
				<div class="w-full flex flex-col justify-center items-start my-10">
					<div class="flex">
						<span class="text-3xl md:text-5xl hover:text-black duration-200 font-montserrat font-semibold text-center pr-2">Tanishq</span>
						<span class="text-3xl md:text-5xl hover:text-black duration-200 font-montserrat font-thin text-center">Singh</span>
					</div>
					<span class="text-xs md:text-sm font-semibold text-[#999] ml-1 md:ml-2 md:mt-1 border-b-1 border-[#999] border-dotted">fullstack & devops developer</span>
				</div>
			</main>
		</App>
	);
}
