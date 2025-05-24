import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function FormButton({ onClick, text }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2 rounded-lg bg-medium-purple hover:bg-medium-purple/90 hover:cursor-pointer text-white py-2"
    >
      {text}
      <ChevronRightIcon className="ml-2 h-4 w-4" />
    </button>
  );
}
