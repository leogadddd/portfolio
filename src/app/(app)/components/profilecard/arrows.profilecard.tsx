import React from "react";
import Image from "next/image";
import Arrow from "@/assets/images/arrow-dash.svg";
import Circle from "@/assets/images/circle-dash.svg";

const Arrows = () => {
	return (
		<>
			<Image src={Arrow} alt="Arrow" priority className="hidden lg:block absolute w-52 bottom-36 -right-3" />
			<Image src={Arrow} alt="Arrow" priority className="w-52 hidden md:block lg:hidden absolute h-auto bottom-8 left-10 rotate-45 scale-x-[-1] " />
			<Image src={Arrow} alt="Arrow" priority className="w-48 block md:hidden lg:hidden absolute h-auto -bottom-8 left-1/2 -translate-x-[85%] scale-x-[-1] " />

			<Image src={Circle} alt="Arrow" priority className="hidden lg:block absolute w-72 -top-40 -left-32" />
			<Image src={Circle} alt="Arrow" priority className="hidden md:block lg:hidden absolute w-72 -top-48 -right-32 rotate-45" />
			<Image src={Circle} alt="Arrow" priority className="block md:hidden lg:hidden absolute w-72 -top-48 -right-32 rotate-45" />
		</>
	);
};

export default Arrows;
