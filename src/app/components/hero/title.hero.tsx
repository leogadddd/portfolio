import React from 'react';

interface titleheroprops {
	title: string
	subtitle: string
}

const TitleHero = ({ title, subtitle }: titleheroprops) => {
	return (
		<div className="text-center lg:text-left mt-6 lg:mt-0">
			<h1 className="text-6xl md:text-7xl lg:text-8xl uppercase font-bold">{title}</h1>
			<h2 className="text-6xl md:text-7xl lg:text-7xl uppercase font-bold text-[--color-dark-accent-2]">{subtitle}</h2>
		</div>
	)
}

export default TitleHero