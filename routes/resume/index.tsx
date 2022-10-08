import { App } from "$components/layouts/_app.tsx";
// import { Task } from "$components/resume/task.tsx";

export default function Resume() {
	return (
		<App header footer>
			<main class="flex-1 w-full flex flex-col justify-start items-start px-3">
				<div class="w-full flex flex-col justify-center items-start mt-3">
					<div class="flex">
						<span class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-black duration-200 font-montserrat font-semibold text-center pr-2">
							Tanishq
						</span>
						<span class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:text-black duration-200 font-montserrat font-thin text-center">
							Singh
						</span>
					</div>
					<span class="text-xs md:text-sm font-semibold text-[#999] ml-1 md:ml-2 md:mt-1 border-b-1 border-[#999] border-dotted">
						fullstack & devops developer
					</span>
				</div>
				<section class="w-full flex flex-col max-w-4xl">
					<article class="w-full flex flex-col mt-20">
						<span class="text-xl sm:text-2xl font-bold text-blue-600 tracking-wide mb-4 lg:ml-64">
							{/* Projects */}
						</span>
					</article>
				</section>
			</main>
		</App>
	);
}
