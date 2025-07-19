export default function FormCard({
  title,
  description,
  children,
  widthClass = "max-w-md",
}) {
  return (
    <div className={`w-full sm:mx-auto ${widthClass}`}>
      <div className="bg-cool-white rounded-xl px-6 py-12 shadow-sm sm:px-12">
        {title && (
          <h2 className="text-base font-bold text-grey-purple">{title}</h2>
        )}
        {description && (
          <p className="mt-1 text-sm text-charcoal/80">{description}</p>
        )}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
