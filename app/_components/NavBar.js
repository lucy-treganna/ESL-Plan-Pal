"use server";

import Link from "next/link";
import SignOutButton from "@/app/_components/SignOutButton";
import { createClient } from "@/app/utils/supabase/server";

export default async function NavBar() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data?.user;

  const navigation = [{ name: "Explore", href: "/generate" }];

  return (
    <header className="px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/">
          <h1 className="text-medium-purple hover:text-medium-purple/80 font-light font-poppins text-xl">
            ESL PlanPal
          </h1>
        </Link>
        <nav className="z-10 text-md text-medium-purple hover:text-medium-purple/80">
          <ul className="flex gap-16 items-center">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
            {user ? (
              <li>
                <SignOutButton />
              </li>
            ) : (
              <>
                <li>
                  <Link href="/login">Log in</Link>
                </li>
                <li>
                  <Link href="/signup">Sign up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
