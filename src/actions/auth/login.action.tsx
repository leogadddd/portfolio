"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServer } from "@/lib/supabase/supabase";
import { validateLogin } from "@/app/lib/schema/auth.schema";

type login = {
  email: string;
  password: string;
};

export async function login(formData: FormData): Promise<{ error?: string }> {
  const supabase = await createSupabaseServer();

  const data: login = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validationResult = validateLogin(data);

  if (!validationResult.success) {
    return { error: validationResult.errors };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/login", "layout");
  redirect("/x");

  return {}; // Avoids "Function lacks ending return statement" error
}
