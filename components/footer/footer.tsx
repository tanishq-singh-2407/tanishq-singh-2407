import { JSX } from "preact";
import { Link } from "$components/link/link.tsx";

export function Footer(props: JSX.HTMLAttributes<HTMLElement>) {
	return (
		<footer
			{...props}
			class="h-36 sm:h-44 w-full flex justify-end items-center"
		>
			<Link href="/17" name="~17, fullstack developer" />
		</footer>
	);
}
