import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function FormButton({ onClick, text, isLoading, loadingText }) {
  return (
    <button
      type="submit"
      onClick={onClick}
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
