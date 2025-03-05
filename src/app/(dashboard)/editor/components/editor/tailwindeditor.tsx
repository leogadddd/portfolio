"use client";

import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import {
  EditorBubble,
  EditorBubbleItem,
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorCommandList,
  EditorContent,
  EditorInstance,
  EditorRoot,
  ImageResizer,
  type JSONContent,
  handleCommandNavigation,
  handleImageDrop,
  handleImagePaste,
} from "novel";
import { generateHTML, generateJSON } from "@tiptap/html";
import hljs from "highlight.js";
import { defaultExtensions } from "@/components/editor/extensions";
import { uploadFn } from "@/components/editor/image.upload";
import {
  slashCommand,
  suggestionItems,
} from "@/components/editor/slash.command";
import GenerativeMenuSwitch from "@/components/editor/generative/generativemenu.switch";
import { Separator } from "@/components/editor/ui/seperator";
import { NodeSelector } from "@/components/editor/selectors/node.selector";
import { LinkSelector } from "@/components/editor/selectors/link.selector";
import { TextButtons } from "@/components/editor/selectors/text.buttons";
import { ColorSelector } from "@/components/editor/selectors/color.selector";

interface TailwindAdvancedEditorProps {
  context: {
    setEditor: (editor: EditorInstance | undefined) => void;
    setSaveState: (state: string) => void;
    setCharCount: (count: number) => void;
    content: string | undefined;
  };
  onSave: (content_html: string, content_json: JSONContent) => void;
}

const TailwindAdvancedEditor: React.FC<TailwindAdvancedEditorProps> = ({
  context,
  onSave,
}) => {
  const { setEditor, setSaveState, setCharCount } = context;
  const [initialContent, setInitialContent] = useState<JSONContent | undefined>(
    generateJSON(context.content!, [...defaultExtensions, slashCommand])
  );
  const [openNode, setOpenNode] = useState(false);
  const [openColor, setOpenColor] = useState(false);
  const [openLink, setOpenLink] = useState(false);
  const [openAI, setOpenAI] = useState(false);

  const debouncedUpdates = useDebouncedCallback((editor: EditorInstance) => {
    const json = editor.getJSON();
    const html = editor.getHTML();
    onSave(html, json);
    setCharCount(editor.storage.characterCount.words());
    setSaveState("Saved");
  }, 500);

  return (
    <div className="relative w-full">
      <p></p>
      <EditorRoot>
        <EditorContent
          autofocus
          immediatelyRender={false}
          onCreate={({ editor }) => {
            setEditor(editor);
          }}
          onDestroy={() => setEditor(undefined)}
          extensions={[...defaultExtensions, slashCommand]}
          initialContent={initialContent}
          className="relative min-h-[500px] w-full mx-auto max-w-screen-lg border-muted bg-background sm:mb-[calc(20vh)]"
          editorProps={{
            handleDOMEvents: {
              keydown: (_view, event) => handleCommandNavigation(event),
            },
            handlePaste: (view, event) =>
              handleImagePaste(view, event, uploadFn),
            handleDrop: (view, event, _slice, moved) =>
              handleImageDrop(view, event, moved, uploadFn),
            attributes: {
              class:
                "prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full",
            },
          }}
          onUpdate={({ editor }) => {
            debouncedUpdates(editor);
            setSaveState("Unsaved");
          }}
          slotAfter={<ImageResizer />}
        >
          <EditorCommand className="z-50 h-auto max-h-[330px] overflow-y-auto rounded-xl border border-[--color-dark-accent-2] bg-[--color-dark] px-2 pr-3 py-2 shadow-md transition-all">
            <EditorCommandEmpty className="px-2 text-muted-foreground">
              No results
            </EditorCommandEmpty>
            <EditorCommandList>
              {suggestionItems.map((item) => (
                <EditorCommandItem
                  key={item.title}
                  value={item.title}
                  onCommand={(val) => item.command?.(val)}
                  className="flex w-full items-center space-x-2 rounded-md px-4 pr-6 py-1 text-left text-sm hover:bg-[--color-dark-accent] aria-selected:bg-[--color-dark-accent]"
                >
                  <div className="flex h-10 w-10 items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-[--color-dark-accent-3]">
                      {item.description}
                    </p>
                  </div>
                </EditorCommandItem>
              ))}
            </EditorCommandList>
          </EditorCommand>
          <GenerativeMenuSwitch open={openAI} onOpenChange={setOpenAI}>
            <Separator orientation="vertical" />
            <NodeSelector open={openNode} onOpenChange={setOpenNode} />
            <Separator orientation="vertical" />
            <LinkSelector open={openLink} onOpenChange={setOpenLink} />
            <Separator orientation="vertical" />
            <TextButtons />
            <Separator orientation="vertical" />
            <ColorSelector open={openColor} onOpenChange={setOpenColor} />
          </GenerativeMenuSwitch>
        </EditorContent>
      </EditorRoot>
    </div>
  );
};

export default TailwindAdvancedEditor;
