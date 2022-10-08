import { JSX } from "preact";

export function Task(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			class="w-full flex flex-col lg:flex-row items-start mb-10"
		>
			<div class="w-full max-w-[16rem] flex lg:flex-col justify-start lg:justify-end lg:pr-10 items-center lg:items-end">
				<span class="text-[#0009] text-base lg:text-[1.1rem] mb-1">Dec 2022 - Present</span>
				<div class="hidden lg:flex flex-col justify-end items-center">
					<a href="#" class="text-blue-900 font-medium">demo</a>
					<a href="#" class="text-blue-900 font-medium">demo</a>
				</div>
			</div>
			<div class="w-full flex flex-col justify-start items-start">
				<span class="font-bold text-lg lg:text-[1.2rem] border-b-1 border-[#594f4f] border-dotted">Strem Concurrently</span>
				<div class="w-full lg:hidden flex justify-start items-center gap-2">
					<a href="#" class="text-blue-900 font-medium">demo</a>
					<a href="#" class="text-blue-900 font-medium">demo</a>
				</div>
				<span class="font-medium text-base lg:text-[1rem] mt-1 mb-2 text-[#030303]">Created and actively maintaining open-source projects such as:</span>
				<ul class="list-disc ml-5 flex flex-col gap-2 text-[0.95rem]">
					<li>
						<a href="#" class="border-b-1 border-black">daisyui.com</a>
						: the most popular, free and open-source Tailwind CSS component library, currently being used in 20,000+ open-source projects
					</li>
					<li>
						<a href="#" class="border-b-1 border-black">lorem.space</a>
						: placeholder image generator API
					</li>
					<li>
						<a href="#" class="border-b-1 border-black">svelte-countup</a>
						: component for Svelte.js
					</li>

				</ul>
			</div>
		</div>
	);
}
