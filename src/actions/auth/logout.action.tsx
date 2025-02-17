"use server";

import { redirect } from "next/navigation";
import { createSupabaseServer } from "@/lib/supabase/supabase";

export async function logout() {
  const supabase = await createSupabaseServer();
  await supabase.auth.signOut();

  redirect("/login"); // No need to revalidate the path here
}
