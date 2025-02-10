"use client";

import { useForm, ValidationError } from "@formspree/react";
import { FaCheck } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { ImSpinner2 } from "react-icons/im";

const Form = () => {
	const [state, handleSubmit] = useForm("xjkgonrj");
	const formRef = useRef<HTMLFormElement>(null);
	const [formHeight, setFormHeight] = useState("auto");

	// Capture form height before submission
	useEffect(() => {
		if (formRef.current) {
			setFormHeight(`${formRef.current.offsetHeight}px`);
		}
	}, [state.submitting]);

	if (state.succeeded) {
		return (
			<div
				className="w-full flex flex-col justify-center items-center border-2 rounded-xl py-8 border-dashed border-[--color-dark-accent-3] transition-all"
				style={{ height: formHeight }} // Maintain previous form height
			>
				<FaCheck className="text-[--color-accent]" size={40} />
				<div className="mt-4 text-center">
					<h1 className="font-bold text-xl">Sent To Leo</h1>
					<p className="text-sm text-[--color-dark-accent-3]">
						Thanks"!" I'll get back to you.
					</p>
				</div>
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-4 w-full transition-all"
			style={{ height: formHeight }}
			ref={formRef}
		>
			<input
				id="fullname"
				type="text"
				name="fullname"
				placeholder="Full Name"
				className="p-2 px-4 rounded-xl text-[--color-dark] placeholder:text-[--color-dark-accent-3]"
				required
			/>
			<ValidationError prefix="Full Name" field="fullname" errors={state.errors} />

			<input
				id="email"
				type="email"
				name="email"
				placeholder="Email"
				className="p-2 px-4 rounded-xl text-[--color-dark] placeholder:text-[--color-dark-accent-3]"
				required
			/>
			<ValidationError prefix="Email" field="email" errors={state.errors} />

			<textarea
				id="message"
				name="message"
				placeholder="Your Message"
				className="p-2 px-4 rounded-xl max-h-40 min-h-24 text-[--color-dark] placeholder:text-[--color-dark-accent-3]"
				required
			/>
			<ValidationError prefix="Message" field="message" errors={state.errors} />

			<button
				type="submit"
				disabled={state.submitting}
				className="bg-[--color-accent] p-2 rounded-xl drop-shadow-lg disabled:grayscale flex justify-center items-center"
			>
				{state.submitting ? <Spinner /> : "Send"}
			</button>
		</form>
	);
};

const Spinner = () => {
	return <ImSpinner2 className="animate-spin" size={24} />;
};

export default Form;
