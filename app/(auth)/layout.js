// app/(auth)/layout.tsx
import NavBar from "@/app/_components/NavBar";

export default function AuthLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 overflow-y-auto px-6 sm:mx-auto w-full">{children}</main>
    </div>
  );
}
