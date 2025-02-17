import React, { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";

interface KeywordInputProps {
	name: string;
	id: string;
	className?: string;
	required?: boolean;
}

const KeywordInput: React.FC<KeywordInputProps> = ({ name, id, className, required }) => {
	const [keywords, setKeywords] = useState<string[]>([]);
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const addKeyword = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter" && inputValue.trim() !== "") {
			event.preventDefault();
			setKeywords((prev) => [...new Set([...prev, inputValue.trim()])]);
			setInputValue("");
		}
	};

	const removeKeyword = (keyword: string) => {
		setKeywords((prev) => prev.filter((k) => k !== keyword));
	};

	return (
		<div className={`relative flex items-center flex-wrap gap-2 ${keywords.length === 0 ? "px-4 p-2" : "px-2 p-2"}  bg-[--color-dark-accent] border border-[--color-dark-accent-2] placeholder:text-[--color-dark-accent-3] rounded-xl w-full ${className}`}>
			{keywords.map((keyword) => (
				<div
					key={keyword}
					className="flex items-center gap-1 px-3 py-1 rounded-lg bg-[--color-accent] text-[--color-light]"
				>
					{keyword}
					<button type="button" onClick={() => removeKeyword(keyword)} className="text-[--color-light]">
						<FaTimes size={14} />
					</button>
				</div>
			))}
			<input
				ref={inputRef}
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyDown={addKeyword}
				className="flex-1 bg-transparent outline-none min-w-[100px] placeholder:text-[--color-dark-accent-3]"
				placeholder="Type a keyword and press Enter"
			/>
			<input
				type="hidden"
				name={name}
				id={id}
				value={keywords.join(",")}
				required={required && keywords.length === 0}
			/>
		</div>
	);
};

export default KeywordInput;
