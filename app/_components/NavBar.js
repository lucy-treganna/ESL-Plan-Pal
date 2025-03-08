export default function NavBar() {
  const navigation = {};
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-transparent py-2 px-2 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between p-2">
        <h1 className="text-medium-purple font-light font-poppins text-xl">
          ESL PlanPal
        </h1>
      </div>
    </nav>
  );
}
