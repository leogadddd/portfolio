"use client";

import React, {
	ReactNode,
	useState,
	useContext,
	createContext,
} from "react";
import Modal from "@/components/modal/modal";
import { EditorInstance } from "novel";
import { project } from "@/actions/projects/getallproject.action";

interface EditorContext {
	editor: EditorInstance | undefined
	pageContext: pageContext | undefined
	saveState: string | undefined
	charCount: number | undefined
	setSaveState: React.Dispatch<React.SetStateAction<string | undefined>>
	setCharCount: React.Dispatch<React.SetStateAction<number | undefined>>
	setEditor: React.Dispatch<React.SetStateAction<EditorInstance | undefined>>
	setPageContext: React.Dispatch<React.SetStateAction<pageContext | undefined>>
}

export const EditorContext = createContext<EditorContext | undefined>(
	undefined
);

export type pageContext = project;

export const EditorContextProvider = ({ children }: { children: ReactNode }) => {
	const [editor, setEditor] = useState<EditorInstance | undefined>(undefined);
	const [pageContext, setPageContext] = useState<pageContext | undefined>(undefined); 
	const [saveState, setSaveState] = useState<string | undefined>("saved");
	const [charCount, setCharCount] = useState<number | undefined>(undefined);

	return (
		<EditorContext.Provider value={{ editor, pageContext, saveState, charCount, setEditor, setSaveState, setCharCount, setPageContext }}>
			{children}
		</EditorContext.Provider>
	)
}

export const useEditorContext = () => {
	const context = useContext(EditorContext);

	if (context === undefined) {
		throw new Error(
			"useEditorContext must be used within EditorContextProvider"
		)
	}
	return context;
}