import React from "react";

import tools from "@/components/tools/tools";
import ToolCard from "@/components/tools/card.tools";

const ToolsSection = () => {
	return (
		<div className="mt-24">
			<div className="max-w-[576px] mx-auto lg:mx-0 text-6xl font-bold uppercase text-center lg:text-left">
				<h1 className="relative">
					<span className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-10 text-[--color-accent] font-medium">-</span>Tools</h1>
				<h2 className="text-[--color-dark-accent-2]">I'm Using</h2>
			</div>
			<div className="mx-auto lg:mx-0 w-full grid grid-cols-1 max-w-[576px] lg:max-w-none md:grid-cols-2 lg:grid-cols-2 gap-1 mt-4 p-3 lg:p-0">
				{tools.map((item, index) => {
					return <ToolCard
						key={`tool-${item.title}-${index}`}
						title={item.title}
						description={item.description}
						image={item.image}
						link={item.url}
					/>
				})}
			</div>
		</div>
	);
};

export default ToolsSection;
