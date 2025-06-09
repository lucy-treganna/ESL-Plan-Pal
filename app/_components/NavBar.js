import Link from "next/link";

export default function NavBar() {
  const navigation = {};
  return (
    <header className="px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/">
          <h1 className="text-medium-purple font-light font-poppins text-xl">
            ESL PlanPal
          </h1>
        </Link>
        <nav className="z-10 text-md text-medium-purple">
          <ul className="flex gap-16 items-center">
            <li>
              <Link href="/generate">Explore</Link>
            </li>
            <li>
              <Link href="/login">Log in</Link>
            </li>
            <li>
              <Link href="/signup">Sign up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
