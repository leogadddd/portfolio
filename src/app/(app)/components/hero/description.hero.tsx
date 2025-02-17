import React from "react";

interface descriptionheroprops {
	text: string;
}

const DescriptionHero = ({ text }: descriptionheroprops) => {
	return (
		<div className=" mt-6 max-w-[400px] mx-auto lg:mx-0 text-center lg:text-left">
			<p className="text-lg/6 text-[--color-dark-accent-3]">
				{text}
			</p>
		</div>
	);
};

export default DescriptionHero;
