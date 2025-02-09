"use client";

import React, { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { IoArrowForwardOutline } from "react-icons/io5";

const Card = () => {

	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		let { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<div className="cursor-pointer max-w-[4500px] mx-auto lg:mx-0 group relative border border-[--color-dark-accent-2] rounded-2xl h-40 w-full bg-[--color-dark-accent] p-4"
			onMouseMove={handleMouseMove}
		>

			<motion.div
				className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
				style={{
					background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              var(--color-accent-hover),
              transparent 80%
            )
          `,
				}}
			/>

			<h1 className="pointer-events-none text-left capitalize font-bold text-sm text-[--color-accent]">
				Blog
			</h1>
			<div className="pointer-events-none flex flex-col gap-1 mt-2">
				<h2 className="text-3xl lg:text-3xl font-bold text-left">Spaceverse</h2>
				<p className="text-sm font-normal text-left text-[--color-dark-accent-3]">
					A Productivity App
				</p>
				<div className="flex justify-between items-center h-7 lg:h-7">
					<div></div>
					<div className="relative">
						<IoArrowForwardOutline
							size={25}
							className="transition-all absolute -right-4 group-hover:-right-6  -translate-x-1/2"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
