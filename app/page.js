export default function Home() {
  return (
    <>
      <div className="p-10 space-y-10">
        {/* Vibrant Colors */}
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-vibrant-navy p-6 text-center"></div>
          <div className="bg-vibrant-cyan p-6 text-center"></div>
          <div className="bg-vibrant-yellow p-6 text-center"></div>
          <div className="bg-vibrant-orange p-6 text-center"></div>
          <div className="bg-vibrant-magenta p-6 text-center"></div>
        </div>

        {/* Neutral Colors */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-neutral-medium-gray p-6 text-center"></div>
          <div className="bg-neutral-light-gray p-6 text-center"></div>
          <div className="bg-neutral-dark-gray p-6 text-center"></div>
        </div>

        {/* Typography */}
        {/* Pairing 1: Inter for Headings, Merriweather Sans for Body Text */}
        <div className="text-neutral-dark-gray">
          <h2 className="text-3xl font-bold">Inter for Headings</h2>
          <p className="font-merriweather text-lg">
            This is a sample sentence with Inter for headings and Merriweather
            Sans for body text. Inter brings a modern touch, while Merriweather
            Sans offers a sophisticated yet readable style for body text.
          </p>
        </div>
      </div>
    </>
  );
}
