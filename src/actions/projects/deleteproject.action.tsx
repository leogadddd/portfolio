"use server";

import { createSupabaseServer } from "@/lib/supabase/supabase";
import { revalidatePath } from "next/cache";

export async function deleteProject(
  projectId: string
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createSupabaseServer();

  // Fetch the project to get its mdx_id
  const { data: project, error: fetchError } = await supabase
    .from("projects")
    .select("mdx_id")
    .eq("id", projectId)
    .single();

  if (fetchError) {
    return { success: false, error: fetchError.message };
  }

  // Delete the project
  const { error: deleteProjectError } = await supabase
    .from("projects")
    .delete()
    .eq("id", projectId);

  if (deleteProjectError) {
    return { success: false, error: deleteProjectError.message };
  }

  // If project had an mdx_id, optionally delete the associated mdx file
  if (project?.mdx_id) {
    await supabase.from("mdx_files").delete().eq("id", project.mdx_id);
  }

  revalidatePath("/x", "layout");

  return { success: true };
}
