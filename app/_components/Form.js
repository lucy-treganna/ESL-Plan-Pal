import { ChevronDownIcon } from "@heroicons/react/24/outline";
import FormButton from "@/app/_components/FormButton";

export default function Form() {
  return (
    <form>
      <div className="bg-cool-white rounded-xl shadow-sm space-y-12 max-w-3xl mx-auto">
        <div className="py-6 px-8">
          <h2 className="text-base/7 font-bold text-grey-purple">
            Quick Generate
          </h2>
          <p className="mt-1 text-sm/6 text-charcoal/80">
            Try our quick generate feature when you&apos;re short on time. Enter
            your criteria below and get ESL resources for your lesson.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="age" className="block text-sm/6 font-medium">
                How old are your students?
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="age"
                  name="age"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-8 pl-3 text-base outline-1 -outline-offset-1 outline-charcoal/20 focus:outline-2 focus:-outline-offset-2 focus:outline-medium-blue sm:text-sm/6"
                >
                  <option>Under 3 years</option>
                  <option>4-5 years</option>
                  <option>5-6 years</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="level" className="block text-sm/6 font-medium">
                What is their English level?
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="level"
                  name="level"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-8 pl-3 text-base outline-1 -outline-offset-1 outline-charcoal/20 focus:outline-2 focus:-outline-offset-2 focus:outline-medium-blue sm:text-sm/6"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="numSongs" className="block text-sm/6 font-medium">
                How many songs would you like to include?
              </label>
              <div className="mt-2">
                <input
                  id="numSongs"
                  name="numSongs"
                  type="number"
                  className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-charcoal/20 focus:outline-2 focus:-outline-offset-2 focus:outline-medium-blue sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="pt-6">
            <FormButton text="Generate resources" />
          </div>
        </div>
      </div>
    </form>
  );
}
