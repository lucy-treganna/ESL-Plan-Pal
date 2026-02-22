"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useFormStatus } from "react-dom";

export default function FormButton({ text, isLoading: externalLoading, loadingText }) {
  const { pending } = useFormStatus()

    const isLoading = typeof externalLoading === "boolean" ? externalLoading : pending;

  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full flex items-center justify-center gap-2 rounded-lg bg-medium-purple hover:bg-medium-purple/90 hover:cursor-pointer text-white py-2"
    >
      {isLoading ? (
        <>
          <div className="animate-spin h-4 w-4 border-2 border-t-transparent border-white rounded-full"></div>
          {loadingText}
        </>
      ) : (
        <>
          {text}
          <ChevronRightIcon className="ml-2 h-4 w-4" />
        </>
      )}
    </button>
  );
}
