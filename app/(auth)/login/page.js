import { login } from "@/app/_lib/actions";
import Image from "next/image";
import FormButton from "@/app/_components/FormButton";
import FormCard from "@/app/_components/FormCard";
import AuthForm from "@/app/_components/AuthForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-10">
        <Image
          alt="ESL PlanPal logo"
          src="/planpal_logo.png"
          width={120}
          height={40}
          className="mx-auto"
        />
        <h2 className="mt-6 text-2xl font-semibold font-inter tracking-tight text-medium-purple">
          Log in to your account
        </h2>
      </div>

        <FormCard>
          <AuthForm formAction={login} />
        </FormCard>

      {/* <div className="mt-10 w-full sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-cool-white rounded-xl px-6 py-12 shadow-sm sm:px-12">
          <form action={login} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-charcoal/20 focus:outline-2 focus:-outline-offset-2 focus:outline-medium-blue sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm/6 font-medium">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="password"
                  className="block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-charcoal/20 focus:outline-2 focus:-outline-offset-2 focus:outline-medium-blue sm:text-sm/6"
                />
              </div>
            </div>
            <FormButton text="Log in" />
          </form>
        </div>
      </div> */}
    </div>
  );
}
