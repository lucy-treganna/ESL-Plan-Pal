"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/app/utils/supabase/server";

export async function login(formData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error(error);
    throw new Error("Error logging in");
  }

  revalidatePath("/");
  redirect("/");
}

export async function signup(formData) {
  console.log(formData);
  const supabase = await createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // NOTE: Email confirmation is disabled for this portfolio project
  // to simplify login/signup. In production, it's recommended to enable
  // confirmation to prevent fake or spam accounts.

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.error(error);
    throw new Error("Error signing up");
  }

  revalidatePath("/");
  redirect("/");
}
