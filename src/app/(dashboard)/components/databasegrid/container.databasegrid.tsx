"use client";

import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { project } from "@/actions/projects/getallproject.action";
import { useTransition } from "react";
import { deleteProject } from '@/actions/projects/deleteproject.action';

interface container {
	data: project
}

const Container = ({ data }: container) => {

	let [isPending, startTransition] = useTransition();

	const handleDelete = () => {
		startTransition(() => {
			deleteProject(data.id);
		});
	};

	return <div className="w-full md:w-80 h-48 rounded-xl bg-[--color-dark-accent] border border-[--color-dark-accent] drop-shadow-lg p-4 flex flex-col">
		<div className="flex">
			<h1 className="flex-1 font-bold text-xl truncate">{data.name}</h1>
		</div>
		<div className="flex-1">
			<p className="text-sm text-[--color-dark-accent-3] truncate">{data.mdx?.subtitle}</p>
		</div>
		<div className="flex justify-center gap-3">
			<button
				onClick={handleDelete}
				disabled={isPending}
				className={isPending ? "opacity-50" : ""}
			>
				<MdDelete size={24} />
			</button>
			<button>
				<TbEdit size={24} />
			</button>
		</div>
	</div>
}

export default Container;