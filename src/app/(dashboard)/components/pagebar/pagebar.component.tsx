"use client";

import React from "react";
import { useEditorContext } from "@/contexts/editor.context";

const PageBar = () => {
  const { saveState, editor, pageContext } = useEditorContext();

  if (!editor) return <div></div>;

  return (
    <div className="flex justify-between gap-6 flex-1">
      <h1 className="font-bold text-lg">{pageContext?.name}</h1>
      <div className="flex items-center gap-2 text-[--color-dark-accent-3]">
        <div className="rounded-lg bg-accent text-sm">{saveState}</div>
      </div>
    </div>
  );
};

export default PageBar;
