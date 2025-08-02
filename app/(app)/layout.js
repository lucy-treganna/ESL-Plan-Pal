// app/(app)/layout.tsx
import NavBar from "@/app/_components/NavBar";

export default function AppLayout({ children }) {
  return (
    <div className="flex flex-col min-h-full">
      <NavBar />
      <main className="flex-1 px-8 py-12">
        <div className="w-full mx-auto max-w-7xl">{children}</div>
      </main>
    </div>
  );
}
