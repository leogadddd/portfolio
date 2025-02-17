"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TabProps } from "@/components/navbar/tab";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Tab: React.FC<TabProps> = ({ routeName, route, Icon }) => {
	const router = useRouter();
	const [onHover, setOnHover] = useState(false);

	return (
		<li className="relative flex justify-center">
			<motion.button
				onClick={(e) => {
					e.preventDefault();
					router.push(route);
				}}
				onPointerEnter={() => setOnHover(true)}
				onPointerLeave={() => setOnHover(false)}
				className="w-14 flex items-center justify-center hover:text-[--color-accent] transition-colors duration-300"
			>
				{Icon}
			</motion.button>

			{/* Animated Tooltip */}
			<AnimatePresence>
				{onHover && (
					<motion.div
						className="pointer-events-none absolute -bottom-10 bg-[--color-dark-accent] px-4 py-1 text-xs rounded-2xl drop-shadow-lg"
						initial={{ opacity: 0, y: -30 }} // Starting state
						animate={{ opacity: 1, y: 0 }} // Visible state
						exit={{ opacity: 0, y: -30 }} // Exiting state
						transition={{ duration: 0.3 }} // Smooth animation
					>
						{routeName}
					</motion.div>
				)}
			</AnimatePresence>
		</li>
	);
};

export default Tab;
