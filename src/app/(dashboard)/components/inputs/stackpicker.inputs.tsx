import React, { useState } from "react";
import { FaJs, FaPython, FaJava, FaReact, FaVuejs, FaAngular, FaNodeJs, FaUnity } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiSharp } from "react-icons/si";

interface StackPickerInputProps {
	name: string;
	id: string;
	className?: string;
	required?: boolean;
}

const iconSize = 24;

const stacks = [
	{ name: "Python", icon: <FaPython size={iconSize} /> },
	{ name: "Java", icon: <FaJava size={iconSize} /> },
	{ name: "C#", icon: <SiSharp size={iconSize} /> },
	{ name: "Vue", icon: <FaVuejs size={iconSize} /> },
	{ name: "Angular", icon: <FaAngular size={iconSize} /> },
	{ name: "Node.js", icon: <FaNodeJs size={iconSize} /> },
	//don't add below this.
	{ name: "JavaScript", icon: <FaJs size={iconSize} /> },
	{ name: "TypeScript", icon: <SiTypescript size={iconSize} /> },
	{ name: "TailwindCSS", icon: <SiTailwindcss size={iconSize} /> },
	{ name: "React", icon: <FaReact size={iconSize} /> },
	{ name: "Unity", icon: <FaUnity size={iconSize} /> }
];

const StackPickerInput: React.FC<StackPickerInputProps> = ({ name, id, className, required }) => {
	const [selectedStacks, setSelectedStacks] = useState<string[]>([]);

	const toggleStack = (stack: string) => {
		setSelectedStacks((prev) =>
			prev.includes(stack)
				? prev.filter((s) => s !== stack)
				: [...prev, stack]
		);
	};

	return (
		<div className={className}>
			<div className="flex flex-wrap gap-2 mb-2">
				{stacks.map(({ name, icon }) => (
					<button
						key={name}
						type="button"
						className={`w-11 h-11 flex items-center justify-center flex-grow gap-2 rounded-lg border transition-all ${selectedStacks.includes(name)
							? "bg-[--color-accent] text-[--color-light] border-[--color-accent]"
							: "bg-[--color-dark-accent] text-[--color-light] border-[--color-dark-accent-2]"
							}`}
						onClick={() => toggleStack(name)}
					>
						{icon}
					</button>
				))}
			</div>
			{/* Hidden input to be accessed by FormData */}
			<input
				type="hidden"
				name={name}
				id={id}
				value={selectedStacks.join(",")}
				required={required}
			/>
		</div>
	);
};

export default StackPickerInput;