import React from "react";
import BlogsCard from "@/components/thoughts/card.thoughts";

const thoughts = [
	{}, {}, {}
]

const ThoughtsSection = () => {
	return (
		<div className="mt-24">
			<div className="max-w-[576px] mx-auto lg:mx-0 text-6xl font-bold uppercase text-center lg:text-left">
				<h1 className="relative">
					<span className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-10 text-[--color-accent] font-medium">-</span>Self-Thought</h1>
				<h2 className="text-[--color-dark-accent-2]">Coder</h2>
			</div>
			<div className="mx-auto lg:mx-0 max-w-[576px] text-center lg:text-left">
				<p className="text-[--color-dark-accent-3] mt-2">
					As a self-taught coder, I quickly learn new tech and solve problems through continuous practice.
				</p>
			</div>

			<div className="mt-6 flex flex-col gap-1 max-w-[576px] mx-auto lg:mx-0">
				{thoughts.map((item, index) => {
					return <BlogsCard key={`projects-${item}-${index}`} />
				})}
			</div>
		</div>
	);
};

export default ThoughtsSection;
