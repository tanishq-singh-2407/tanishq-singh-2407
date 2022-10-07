import { JSX } from "preact";

type Props =
	& JSX.HTMLAttributes<HTMLAnchorElement>
	& Required<{
		name: string;
	}>;

export function Link(props: Props) {
	return (
		<a
			{...props}
			class={`${props.class} text-sm lg:text-[.885rem] text-[#999] duration-200 hover:text-black font-semibold px-3`}
		>
			{props.name}
		</a>
	);
}
