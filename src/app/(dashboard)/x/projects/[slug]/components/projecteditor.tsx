"use client";

import { project } from "@/actions/projects/getallproject.action";
import { useEditorContext } from "@/contexts/editor.context";
import TailwindAdvancedEditor from "@/components/editor/tailwindeditor";
import { JSONContent } from "novel";
import React, { useEffect } from "react";
import { updateContent } from "@/actions/projects/updateContent.action";

interface projecteditor {
  project: project | undefined;
}

const ProjectEditor = ({ project }: projecteditor) => {
  const { setPageContext, setEditor, setSaveState, setCharCount } =
    useEditorContext();

  const handleSave = (conten_html: string, content_json: JSONContent) => {
    new Promise(async (resolve, reject) => {
      await updateContent(project?.mdx?.id!, {
        content_html: conten_html,
        content_json: JSON.stringify(content_json),
      });
    });
  };

  useEffect(() => {
    setPageContext(project);
  }, []);

  return (
    <div>
      <TailwindAdvancedEditor
        key={project?.id}
        context={{
          setEditor,
          setSaveState,
          setCharCount,
          content: project?.mdx?.content_html,
        }}
        onSave={handleSave}
      />
    </div>
  );
};

export default ProjectEditor;
