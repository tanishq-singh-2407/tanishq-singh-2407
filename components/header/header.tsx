import { JSX } from "preact";
import { Link } from "$components/link/link.tsx";

export function Header(props: JSX.HTMLAttributes<HTMLElement>) {
	return (
		<header
			{...props}
			class="min-h-[9rem] sm:min-h-[11rem] w-full flex justify-between md:justify-start items-center"
		>
			<Link href="/" name="Home" />
			{/* <Link href="/resume" name="Resume" /> */}

			<div class="hidden md:flex w-full" />

			<Link
				href="https://github.com/tanishq-singh-2301"
				target="_blank"
				rel="noopener"
				name="Github"
			/>
			<Link href="/contact" name="Contact" />
		</header>
	);
}
