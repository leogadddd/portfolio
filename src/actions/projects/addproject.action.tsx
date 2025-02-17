"use server";

import { validateNewProject } from "@/lib/schema/project.schema";
import { revalidatePath } from "next/cache";
import { createSupabaseServer } from "@/lib/supabase/supabase";
import { calculateReadTimeFromHTML } from "@/lib/mdx/mdx";

type newproject = {
  name: string;
  subtitle: string;
  description: string;
  slug: string;
  stack: string[];
  keywords: string[];
};

export async function addProject(
  formData: FormData
): Promise<{ error?: string }> {
  const data: newproject = {
    name: formData.get("projectname") as string,
    subtitle: formData.get("projectsubtitle") as string,
    description: formData.get("projectdescription") as string,
    slug: formData.get("projectslug") as string,
    stack: (formData.get("projectstack") as string).split(","),
    keywords: (formData.get("projectkeywords") as string).split(","),
  };

  const validationResult = validateNewProject(data);

  if (!validationResult.success) {
    return { error: validationResult.errors };
  }

  const supabase = await createSupabaseServer();

  // 🟢 Step 1: Check if an MDX file already exists
  const { data: existingMdx, error: mdxFetchError } = await supabase
    .from("projects")
    .select("mdx_id")
    .eq("slug", data.slug)
    .single();

  let mdxId = existingMdx?.mdx_id;

  if (!mdxId) {
    // 🔴 Step 2: If no MDX file exists, create a new one
    const { data: mdxData, error: mdxError } = await supabase
      .from("mdx_files")
      .insert([
        {
          title: data.name,
          subtitle: data.subtitle,
          description: data.description,
          keywords: data.keywords,
          content_html: "",
          content_json: "",
          read_time: calculateReadTimeFromHTML(""),
        },
      ])
      .select("id")
      .single();

    if (mdxError) {
      return { error: mdxError.message };
    }

    mdxId = mdxData.id;
  } else return { error: `There is already a slug ${data.slug}.` };

  // 🟢 Step 3: Insert the project if it doesn't exist
  const { data: projectDataRes, error: projectError } = await supabase
    .from("projects")
    .upsert(
      [
        {
          name: data.name,
          slug: data.slug,
          stack: data.stack,
          keywords: data.keywords,
          mdx_id: mdxId, // Use existing or newly created MDX ID
        },
      ],
      { onConflict: "slug" }
    )
    .select("id")
    .single();

  if (projectError) {
    return { error: projectError.message };
  }

  const projectId = projectDataRes.id;

  console.log(`mdx: ${mdxId}\nproject: ${projectId}`);

  revalidatePath("/x", "layout");

  return {};
}
