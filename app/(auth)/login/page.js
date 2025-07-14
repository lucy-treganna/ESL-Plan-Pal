import { login } from "@/app/_lib/actions";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-full justify-center py-12 sm:px-6 lg:px-8">
      <div className="bg-cool-white rounded-xl shadow-sm space-y-12 max-w-3xl mx-auto">
        <form>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
          <button formAction={login}>Log in</button>
        </form>
      </div>
    </div>
  );
}
