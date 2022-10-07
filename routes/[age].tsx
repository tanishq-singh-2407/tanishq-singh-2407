import { App } from "$components/layouts/_app.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Home({ params }: PageProps) {
	return (
		<App header footer>
			<main class="w-full flex justify-center items-center">
				<span class="text-3xl hover:text-black duration-200 font-bold text-center">
					{params.age === "17"
						? `My age is ${params.age} 🦕`
						: "Changing that param doesn't change the fact, I'm still 17. 🤥"}
				</span>
			</main>
		</App>
	);
}
