"use client";

import React from "react";
import AnimatedNumber from "../motion/animatednumber.motion";
import data from "@/components/hero/data";

const DataHero = () => {
	return (
		<div className="flex justify-center lg:justify-start mt-16 h-40">
			{data.map((data) => (
				<div key={`data-${data.key}`} className="w-max h-24 flex flex-col items-center gap-4">
					<h1 className="flex lg:items-center justify-center lg:justify-start  w-full text-5xl lg:text-7xl font-medium text-center lg:text-left h-10 lg:h-16">
						<span className="text-5xl text-[--color-accent]">
							+
						</span>
						<AnimatedNumber value={data.value} />
					</h1>
					<h2 className="w-32 h-12 text-base/5 uppercase text-center lg:text-left text-[--color-dark-accent-3]">
						{data.key.split(" ").map((word, index) => (
							<div key={index}>{word}</div>
						))}
					</h2>
				</div>
			))}
		</div>
	);
};

export default DataHero;
