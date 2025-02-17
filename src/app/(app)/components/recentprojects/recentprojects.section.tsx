import React from "react";
import ProjectsCard from "@/components/recentprojects/card.recentprojects";

const projects = [
	{}, {}, {}
]

const RecentProjectSection = () => {
	return (
		<div className="mt-24">
			<div className="max-w-[576px] mx-auto lg:mx-0 text-6xl font-bold uppercase text-center lg:text-left">
				<h1 className="relative">
					<span className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-10 text-[--color-accent] font-medium">-</span>Recent</h1>
				<h2 className="text-[--color-dark-accent-2]">projects</h2>
			</div>

			<div className="mt-4 flex flex-col gap-1 max-w-[576px] mx-auto lg:mx-0">
				{projects.map((item, index) => {
					return <ProjectsCard key={`projects-${item}-${index}`} />
				})}
			</div>
		</div>
	);
};

export default RecentProjectSection;
