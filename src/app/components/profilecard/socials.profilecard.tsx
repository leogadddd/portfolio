import React from "react";
import sociallinks from "@/components/profilecard/socials";

const Socials = () => {
	return (
		<div className="flex justify-center gap-6 mt-2 lg:mt-8 relative z-[10]">
			{sociallinks.map((item) => (
				<a className="bg-[--color-light]" key={`sociallink-${item.name}`} href={item.url} rel="noreferrer" target="_blank">
					<item.Icon size={24} className="text-[--color-accent]" />
				</a>
			))}
		</div>
	);
};

export default Socials;
