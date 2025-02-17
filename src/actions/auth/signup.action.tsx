"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServer } from "@/lib/supabase/supabase";
import { validateSignup } from "@/app/lib/schema/auth.schema";

type signup = {
  email: string;
  password: string;
  confirmPassword: string;
};

const isDevelopment = process.env.NODE_ENV === "development";

export async function signup(formData: FormData): Promise<{ error?: string }> {
  const supabase = await createSupabaseServer();

  const data: signup = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  if (isDevelopment) return { error: "Sign Up is Disabled" };

  const validationResult = validateSignup(data);

  if (!validationResult.success) {
    return { error: validationResult.errors };
  }

  const { error } = await supabase.auth.signUp({
    email: data.email!,
    password: data.password!,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/signup", "layout");
  redirect("/x");

  return {}; // Avoids "Function lacks ending return statement" error
}
