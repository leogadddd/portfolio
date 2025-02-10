"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ value }: { value: number }) => {
	const [randomStart, setRandomStart] = useState(0);

	useEffect(() => {
		// Ensure this runs only on the client
		setRandomStart(Math.floor(value * 0.8 + Math.random() * value * 0.4));
	}, [value]);

	const spring = useSpring(randomStart, {
		mass: 0.2,
		stiffness: 25,
		damping: 15
	});

	const display = useTransform(spring, (current) =>
		Math.round(current).toLocaleString()
	);

	useEffect(() => {
		spring.set(value);
	}, [spring, value]);

	return <motion.span>{display}</motion.span>;
}

export default AnimatedNumber;