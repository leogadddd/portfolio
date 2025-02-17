import { createSupabaseServer } from "@/lib/supabase/supabase";
import { project } from "@/actions/projects/getallproject.action";

export async function getProjectBySlug(slug: string): Promise<{
  data?: project;
  error?: string;
}> {
  const supabase = await createSupabaseServer();

  // Fetch the project by slug
  const { data: projectData, error: projectError } = await supabase
    .from("projects")
    .select()
    .eq("slug", slug)
    .single();

  if (projectError) {
    return { error: projectError.message };
  }

  if (!projectData) {
    return { error: "Project not found" };
  }

  // Fetch the corresponding MDX file if mdx_id exists
  let mdxData = null;
  if (projectData.mdx_id) {
    const { data, error: mdxError } = await supabase
      .from("mdx_files")
      .select()
      .eq("id", projectData.mdx_id)
      .single();

    if (mdxError) {
      return { error: mdxError.message };
    }
    mdxData = data;
  }

  return { data: { ...projectData, mdx: mdxData } };
}
