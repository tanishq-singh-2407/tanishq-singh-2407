import { JSX } from "preact";

export function Noise(props: JSX.HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} class="fixed top-0 bottom-0 left-0 right-0 h-full w-full z-50 pointer-events-none">
			<div className="relative h-full w-full pointer-events-none">
                <div id="noise" />
            </div>
		</div>
	);
}
