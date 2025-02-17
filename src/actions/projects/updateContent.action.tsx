"use server";

import { calculateReadTimeFromHTML } from "@/app/lib/mdx/mdx";
import { validateUpdateContent } from "@/lib/schema/mdx.schema";
import { createSupabaseServer } from "@/lib/supabase/supabase";

import sanitizeHtml from "sanitize-html";

type updatecontent = {
  mdx_id: string;
  content_html: string;
  content_json: string;
  read_time: number;
};

export async function updateContent(
  id: string,
  _data: { content_html: string; content_json: string }
): Promise<{ error?: string }> {
  const contenthtml = _data.content_html;
  const clean_content_html = sanitizeHtml(contenthtml);

  const data: updatecontent = {
    mdx_id: id,
    content_html: contenthtml,
    content_json: _data.content_json,
    read_time: calculateReadTimeFromHTML(clean_content_html),
  };

  console.log(data);

  const validationResult = validateUpdateContent(data);

  if (!validationResult.success) {
    return { error: JSON.stringify(validationResult.errors) };
  }

  const supabase = await createSupabaseServer();

  const { error: mdxError } = await supabase
    .from("mdx_files")
    .update({
      content_html: data.content_html,
      content_json: data.content_json,
      read_time: data.read_time,
      updated_at: new Date(),
    })
    .eq("id", id);

  if (mdxError) {
    return { error: mdxError.message };
  }

  return {};
}
