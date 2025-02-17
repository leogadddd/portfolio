"use client";

import React, {
	ReactNode,
	useState,
	useEffect,
	useContext,
	createContext,
} from "react";
import Modal from "@/components/modal/modal";

interface ModalsContext {
	// open: boolean
	// setisOpen: React.Dispatch<React.SetStateAction<boolean>>
	// content: ReactNode | undefined
	openModal: (title: string, content: React.JSX.Element) => void
	closeModal: () => void;
}

export const ModalsContext = createContext<ModalsContext | undefined>(
	undefined
);

export const ModalsContextProvider = ({ children }: { children: ReactNode }) => {
	const [open, setisOpen] = useState<boolean>(false);
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<React.JSX.Element | undefined>(undefined);

	const openModal = (title: string, content: React.JSX.Element) => {
		setContent(content);
		setTitle(title);
		setisOpen(true);
	}

	const closeModal = () => {
		setisOpen(false);
		setTitle("");
		setContent(undefined);
	}

	return (
		<ModalsContext.Provider value={{ openModal, closeModal }}>
			{children}
			{open && <>
				<Modal title={title}>
					{content}
				</Modal>
			</>}
		</ModalsContext.Provider>
	)
}

export const useModalsContext = () => {
	const context = useContext(ModalsContext);

	if (context === undefined) {
		throw new Error(
			"useModalsContext must be used within ModalsContextProvider"
		)
	}
	return context;
}