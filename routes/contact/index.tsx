import { App } from "$components/layouts/_app.tsx";
import { Link } from "$components/link/link.tsx";
import { contacts } from "$constant/contact/index.ts";

export default function Contact() {
	return (
		<App header>
			<main class="w-full flex-1 flex justify-end items-start pb-20 flex-col md:items-end md:pb-24 md:flex-row">
				<span class="hidden md:flex text-sm text-[#999] cursor-default pointer-events-none font-semibold absolute top-1/2 left-1/2 -translate-1/2">
					minimal, contact.
				</span>

				{contacts.map(({ href, name, target }) => (
					<Link
						name={name}
						href={href}
						key={href}
						rel="noopener"
						target={target ?? "_blank"}
						class="text-base! py-1!"
					/>
				))}
			</main>
		</App>
	);
}
