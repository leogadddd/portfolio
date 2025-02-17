import { revalidatePath } from "next/cache";
import { createSupabaseServer } from "@/lib/supabase/supabase";

export type mdx = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
  read_time: number;
  content_html: string;
  content_json: string;
  created_at: Date;
  updated_at: Date;
};

export type project = {
  id: string;
  name: string;
  slug: string;
  stack: string[];
  keywords: string[];
  mdx: mdx | null;
  created_at: Date;
  updated_at: Date;
};

export async function getProjects(): Promise<{
  data?: project[];
  error?: string;
}> {
  const supabase = await createSupabaseServer();

  // Fetch all projects
  const { data: projectData, error: projectError } = await supabase
    .from("projects")
    .select();

  if (projectError) {
    return { error: projectError.message };
  }

  if (!projectData || projectData.length === 0) {
    return { data: [] };
  }

  // Fetch all MDX files that match the projects' mdx_id
  const mdxIds = projectData.map((project) => project.mdx_id).filter(Boolean); // Ensure no null values
  const { data: mdxData, error: mdxError } = await supabase
    .from("mdx_files")
    .select()
    .in("id", mdxIds); // Fetch mdx files matching mdx_id

  if (mdxError) {
    return { error: mdxError.message };
  }

  // Convert MDX data into a lookup map for easier access
  const mdxMap = new Map(mdxData?.map((mdx) => [mdx.id, mdx]));

  // Merge MDX data into projects
  const formattedProjects: project[] = projectData.map((project) => ({
    ...project,
    mdx: mdxMap.get(project.mdx_id) || null, // Assign the corresponding mdx object
  }));

  return { data: formattedProjects };
}
