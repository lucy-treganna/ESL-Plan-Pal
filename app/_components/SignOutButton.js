"use client";
import { createClient } from "@/app/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SpinnerMini from "@/app/_components/SpinnerMini";
export default function SignOutButton() {
  const supabase = createClient();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function signOut() {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      router.push("/");
      router.refresh();
    }
  }
  return (
    <button onClick={signOut} className="cursor-pointer">
      {loading ? (
        <>
          <SpinnerMini />
          <span className="sr-only">Signing out...</span>
        </>
      ) : (
        "Sign out"
      )}
    </button>
  );
}
