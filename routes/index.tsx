import { Header } from "$components/header/index.ts";
import { Footer } from "$components/footer/index.ts";
import { asset, Head } from "$fresh/runtime.ts";

export default function Home() {
	return (
		<div
			class="h-screen w-full text-[#333333] px-10 sm:px-20 md:px-28 lg:px-32 flex justify-between items-center flex-col bg-center bg-cover bg-no-repeat"
			style={{
				backgroundImage: `url(${asset("/white-paper-texture.webp")})`,
			}}
		>
			<Head>
				<title>Tanishq Singh</title>
			</Head>

			<Header />

			<main class="w-full flex justify-center items-center">
				<a
					href="https://github.com/tanishq-singh-2301"
					target="_blank"
					rel="noopener"
					class="text-5xl hover:text-black duration-200 font-bold text-center"
				>
					TANISHQ SINGH
				</a>
			</main>

			<Footer />
		</div>
	);
}
