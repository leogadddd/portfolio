"use client";

import React, { useState } from 'react'
import { ImSpinner2 } from 'react-icons/im';
import StackPickerInput from "@/components/inputs/stackpicker.inputs";
import KeywordInput from "@/components/inputs/keyword.input";
import { addProject } from "@/actions/projects/addproject.action";
import ErrorMessage from "@/components/general/errormessages.component";
import { useModalsContext } from "@/contexts/modals.context";

import { generateSlug } from "@/lib/mdx/mdx";

const DetailModal = () => {

	const { closeModal } = useModalsContext();

	const [slug, setSlug] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isSuccess, setisSucess] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setErrorMessage("");
		setLoading(true);
		setisSucess(false);

		const formData = new FormData(event.currentTarget);

		const response = await addProject(formData);

		if (response?.error) {
			setErrorMessage(response.error);
			setLoading(false);
			return;
		}

		setisSucess(true);
		setLoading(false);
		closeModal();
	};

	return (
		<form className="flex flex-col" onSubmit={handleSubmit}>
			<ErrorMessage error={errorMessage} />
			{
				isSuccess && (
					<p className="w-full text-green-500 mt-2 text-center mb-4 p-2 py-3 bg-green-900 rounded-xl">
						Created a New Project
					</p>
				)
			}
			<label htmlFor="projectname" className="text-sm my-1 text-[--color-dark-accent-3]">Title</label>
			<input
				type="text"
				name="projectname"
				id="projectname"
				className="px-4 p-2 bg-[--color-dark-accent] border border-[--color-dark-accent-2] placeholder:text-[--color-dark-accent-3] rounded-xl"
				placeholder="Title for your Project"
				onChange={(e) => setSlug(generateSlug(e.target.value))}
			/>
			<label htmlFor="projectsubtitle" className="text-sm my-1 text-[--color-dark-accent-3]">Subtitle</label>
			<input
				type="text"
				name="projectsubtitle"
				id="projectsubtitle"
				className="px-4 p-2 bg-[--color-dark-accent] border border-[--color-dark-accent-2] placeholder:text-[--color-dark-accent-3] rounded-xl"
				placeholder="Subtitle for your Project"
			/>
			<label htmlFor="projectdescription" className="text-sm my-1 text-[--color-dark-accent-3]">Description</label>
			<textarea
				name="projectdescription"
				id="projectdescription"
				className="px-4 p-2 bg-[--color-dark-accent] border border-[--color-dark-accent-2] placeholder:text-[--color-dark-accent-3] rounded-xl max-h-40 min-h-24"
				placeholder="Description of the Project"
			/>
			<label htmlFor="projectslug" className="text-sm my-1 text-[--color-dark-accent-3]">Slug</label>
			<input
				type="text"
				name="projectslug"
				id="projectslug"
				className="px-4 p-2 bg-[--color-dark-accent] border border-[--color-dark-accent-2] placeholder:text-[--color-dark-accent-3] rounded-xl"
				placeholder="Slug for your Project"
				value={slug}
				onChange={(e) => setSlug(e.target.value)}
			/>
			<label htmlFor="projectstack" className="text-sm my-1 text-[--color-dark-accent-3]">Stack</label>
			<StackPickerInput
				name="projectstack"
				id="projectstack"
			/>
			<label htmlFor="projectstack" className="text-sm my-1 text-[--color-dark-accent-3]">Keywords</label>
			<KeywordInput
				name="projectkeywords"
				id="projectkeywords"
				className="mb-4"
			/>

			<button
				type="submit"
				className=
				"p-2 mb-1 mt-8 bg-[--color-accent] rounded-xl drop-shadow-xl hover:brightness-110 transition-all cursor-pointer flex justify-center items-center disabled:grayscale disabled:cursor-not-allowed"
				disabled={loading}
			>
				{loading ? <Spinner /> : "Create"}
			</button>
		</form>
	)
}

const Spinner = () => {
	return <ImSpinner2 className="animate-spin" size={24} />;
};

export default DetailModal