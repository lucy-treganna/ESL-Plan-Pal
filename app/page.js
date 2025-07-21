import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <div className="overflow-x-hidden absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-sky-blue rounded-full blur-3xl opacity-60 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-medium-blue rounded-full blur-3xl opacity-40 transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-inter font-medium rounded-full bg-sky-blue text-medium-purple">
          <SparklesIcon className="w-5 h-5" /> Smarter Lesson Planning
        </div>
        <h1 className="text-4xl font-bold font-inter tracking-tight sm:text-5xl md:text-6xl text-medium-purple">
          ESL PlanPal
          <span className="block text-medium-blue">
            Lesson Planning, Simplified
          </span>
        </h1>
        <h2 className="mt-6 max-w-5xl font-semibold font-poppins text-lg leading-8 text-grey-purple">
          Generate, search, and save engaging ESL resources for young learners.
          Build and customize AI-powered lesson plans effortlessly.
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
        <Link
          href="/generate"
          className="font-poppins rounded-lg bg-medium-purple hover:bg-grey-purple hover:cursor-pointer px-6 py-3 text-lg font-semibold text-cool-white shadow-xs"
        >
          Get Started Now
        </Link>
        <button className="font-poppins rounded-lg border border-medium-purple hover:bg-sky-blue/10 hover:cursor-pointer px-6 py-3 text-lg font-semibold text-medium-purple shadow-xs">
          Find Out More
        </button>
      </div>
    </div>
  );
}
