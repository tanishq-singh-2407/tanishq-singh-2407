import { Header } from "$components/header/header.tsx";
import { Footer } from "$components/footer/footer.tsx";
import { asset, Head } from "$fresh/runtime.ts";
import { JSX } from "preact/jsx-runtime";

type Props = {
	children: JSX.Element;
};

export function App({ children }: Props) {
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

			{children}

			<Footer />
		</div>
	);
}
