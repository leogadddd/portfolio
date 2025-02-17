"use client";

import React from 'react';
import { BiSolidPlusSquare } from "react-icons/bi";
import { HiRefresh } from "react-icons/hi";
import { useModalsContext } from '@/contexts/modals.context';
import DetailModal from "@/services/project/details.modal";

interface TitlebarGrid {
	title: string
}

const TitlebarGird = ({ title }: TitlebarGrid) => {

	const { openModal } = useModalsContext();

	return (
		<div className="flex justify-between">
			<h1 className="font-bold uppercase">
				{title}
			</h1>

			<div className="flex gap-3">
				<button>
					<HiRefresh size={24} />
				</button>
				<button onClick={() => openModal("Edit Project", <DetailModal />)}>
					<BiSolidPlusSquare size={24} />
				</button>
			</div>
		</div>
	)
}

export default TitlebarGird