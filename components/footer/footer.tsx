import { JSX } from "preact";
import { Link } from "$components/header/index.ts";

export function Footer(props: JSX.HTMLAttributes<HTMLElement>) {
	return (
		<footer
			{...props}
			class="h-36 sm:h-44 w-full flex justify-end items-center"
		>
			<Link href="/17" name="~17" />
		</footer>
	);
}
