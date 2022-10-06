import { JSX } from "preact";
import { Link } from "./index.ts";

export function Header(props: JSX.HTMLAttributes<HTMLElement>) {
	return (
		<header
			{...props}
			class="h-36 sm:h-44 w-full px-10 sm:px-20 md:px-28 lg:px-32 flex justify-start items-center fixed top-0"
		>
			<Link href="/" name="Home" />
			<Link href="/resume" name="Resume" />

			<div class="w-full" />

			<Link href="/projects" name="Projects" />
			<Link href="/contact" name="Contact" />
		</header>
	);
}
