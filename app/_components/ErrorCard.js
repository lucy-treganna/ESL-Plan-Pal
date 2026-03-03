import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function ErrorCard({
  title,
  message,
  onClick,
  buttonText = "Try again",
}) {
  return (
    <div className="bg-cool-white rounded-xl shadow-sm max-w-3xl mx-auto">
      <div className="py-10 px-8 text-center">
        <ExclamationCircleIcon className="h-12 w-12 text-medium-purple mx-auto mb-3" />
        <h2 className="text-2xl font-bold md:text-3xl text-medium-purple mb-3">
          {title}
        </h2>
        <p className="text-base text-charcoal/80">{message}</p>
        <div className="pt-6 flex justify-center">
          <button
            onClick={onClick}
            className="px-10 rounded-lg bg-medium-purple hover:bg-medium-purple/90 hover:cursor-pointer text-white py-2"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
