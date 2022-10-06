import { Header } from "$components/header/header.tsx";
import { Footer } from "$components/footer/footer.tsx";
import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact/jsx-runtime";

type Props = JSX.HTMLAttributes<HTMLDivElement> & {
	children: JSX.Element;
};

export function App(props: Props) {
	return (
		<div
			{...props}
			class="h-full w-full text-[#333333] px-10 sm:px-20 md:px-28 lg:px-32 flex justify-between items-center flex-col"
		>
			<Head>
				<title>Tanishq Singh</title>
			</Head>

			<Header />

			{props.children}

			<Footer />
		</div>
	);
}
