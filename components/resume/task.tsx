import { JSX } from "preact";

export type Task = {
	date?: string;
	links?: {
		href: string;
		name: string;
	}[];
	title?: string;
	short_description?: string;
	point_description: {
		link?: {
			name: string;
			href: string;
		};
		lorem: string;
	}[];
};

type Props =
	& JSX.HTMLAttributes<HTMLDivElement>
	& Required<{
		task: Task;
	}>;

export function Task(props: Props) {
	return (
		<div {...props} class="w-full flex flex-col lg:flex-row items-start mb-10">

			<div class="w-full max-w-[16rem] flex lg:flex-col justify-start lg:justify-end lg:pr-10 items-center lg:items-end">
				{props.task.title && <span class="text-[#0009] text-base lg:text-[1.1rem] mb-1">{props.task.date}</span>}

				{props.task.links?.length && <div class="hidden lg:flex flex-col justify-start items-end">
					{props.task.links.map(({ href, name }) => <a href={href} class="text-blue-900 font-medium" key={href} >{name}</a>)}
				</div>}
			</div>

			<div class="w-full flex flex-col justify-start items-start">
				{props.task.title && <span class="font-bold text-lg lg:text-[1.2rem] border-b-1 border-[#594f4f] border-dotted">{props.task.title}</span>}
				
				{props.task.links?.length && <div class="w-full lg:hidden flex justify-start items-center gap-2">
					{props.task.links.map(({ href, name }) => <a href={href} class="text-blue-900 font-medium" key={href} >{name}</a>)}
				</div>}
				
				{props.task.short_description && <span class="font-medium text-base lg:text-[1rem] mt-1 text-[#030303]">{props.task.short_description}</span>}
				
				<ul class="list-disc ml-5 flex flex-col gap-2 text-[0.95rem] mt-2">
					{props.task.point_description.map(({ lorem, link },index) => 
						<li key={index}>
							{link && <a href={link.href} class="border-b-1 border-black">{link.name}</a>}
							{lorem}
						</li>
					)}
				</ul>
			</div>
		</div>
	);
}
