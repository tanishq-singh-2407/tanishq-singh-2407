import { Header } from "$components/header/index.ts";
import { Footer } from "$components/footer/index.ts";
import { Head } from "$fresh/runtime.ts";

export default function Contact() {
	return (
		<div class="h-screen w-full text-[#333333] px-10 sm:px-20 md:px-28 lg:px-32 flex justify-between items-center flex-col">
			<Head>
				<title>Tanishq Singh</title>
			</Head>

			<Header />

			<main class="w-full flex justify-center items-center">
				<span class="text-5xl hover:text-black duration-200 font-bold text-center">
					Contact
				</span>
			</main>

			<Footer />
		</div>
	);
}
