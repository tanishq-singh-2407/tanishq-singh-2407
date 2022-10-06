import { JSX } from "preact";
import { useEffect } from "preact/hooks";

type Props =
	& JSX.HTMLAttributes<HTMLAnchorElement>
	& Required<{
		name: string;
	}>;

export function Link(props: Props) {
	useEffect(() => console.log("asdf", props.name), []);

	return (
		<a
			{...props}
			class="text-sm text-[#999] duration-200 hover:text-black font-semibold px-3"
		>
			{props.name}
		</a>
	);
}
