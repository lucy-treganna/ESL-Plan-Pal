import Hero from "@/app/_components/Hero";
import { SparklesIcon } from "@heroicons/react/24/outline";
export default function Home() {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden bg-pale-blue">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-sky-blue rounded-full blur-3xl opacity-60 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-medium-blue rounded-full blur-3xl opacity-40 transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-inter font-medium rounded-full bg-sky-blue text-medium-purple">
            <SparklesIcon className="w-5 h-5" /> Smarter Lesson Planning
          </div>
          <h1 className="text-4xl font-bold font-inter tracking-tight sm:text-5xl md:text-6xl text-medium-purple">
            ESL PlanPal
            <span className="block text-medium-blue">
              Lesson Planning, Simplified
            </span>
          </h1>
          <p className="mt-6 max-w-5xl font-semibold font-poppins text-lg leading-8 text-grey-purple">
            Generate, search, and save engaging ESL resources for young
            learners. Build and customize AI-powered lesson plans effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <button className="font-poppins rounded-lg  bg-medium-purple hover:bg-grey-purple hover:cursor-pointer px-6 py-3 text-lg font-semibold text-cool-white shadow-sm">
              Get Started Now
            </button>
            <button className="font-poppins rounded-lg  border border-medium-purple hover:bg-sky-blue hover:cursor-pointer px-6 py-3 text-lg font-semibold text-medium-purple shadow-sm">
              Find Out More
            </button>
          </div>
        </div>
      </div>

      {/* <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#6D5A72] to-[#8377D1]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(142,249,243,0.15),transparent_50%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_80%,rgba(94,252,141,0.15),transparent_50%)]" />

        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
            <h1 className="bg-gradient-to-r font-inter from-[#5EFC8D] to-[#8EF9F3] bg-clip-text text-5xl font-bold tracking-tighter text-transparent sm:text-7xl">
              ESL PlanPal
            </h1>
            <p className="font-poppins mt-4 mx-auto max-w-4xl text-lg text-turquoise/90 sm:text-xl md:text-2xl">
              Generate, search, and save engaging ESL resources for young
              learners. Build and customize AI-powered lesson plans
              effortlessly.{" "}
            </p>
            <button className="mt-8 font-poppins rounded-lg bg-[#5EFC8D] px-6 py-3 text-lg font-semibold text-[#6D5A72] shadow-md transition hover:bg-[#5EFC8D]/90">
              Get Started Now
            </button>
        </div>
      </div> */}
    </>
  );
}

{
  /* <div className="p-10 space-y-10">
<div className="grid grid-cols-5 gap-4">
  <div className="bg-vibrant-navy p-6 text-center"></div>
  <div className="bg-vibrant-cyan p-6 text-center"></div>
  <div className="bg-vibrant-yellow p-6 text-center"></div>
  <div className="bg-vibrant-orange p-6 text-center"></div>
  <div className="bg-vibrant-magenta p-6 text-center"></div>
</div>

<div className="grid grid-cols-3 gap-4">
  <div className="bg-neutral-medium-gray p-6 text-center"></div>
  <div className="bg-neutral-light-gray p-6 text-center"></div>
  <div className="bg-neutral-dark-gray p-6 text-center"></div>
</div>


<div className="text-neutral-dark-gray">
  <h2 className="text-3xl font-inter font-bold">Inter for Headings</h2>
  <p className="font-merriweather text-lg">
    This is a sample sentence with Inter for headings and Merriweather
    Sans for body text. Inter brings a modern touch, while Merriweather
    Sans offers a sophisticated yet readable style for body text.
  </p>
</div>
</div> */
}
