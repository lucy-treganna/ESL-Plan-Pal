import { Inter, Merriweather_Sans, Poppins } from "next/font/google";
import "./globals.css";

import NavBar from "@/app/_components/NavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "ESL PlanPal",
  description:
    "ESL PlanPal helps teachers generate, search, and save engaging ESL resources for young learners. Build and customize AI-powered lesson plans effortlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${merriweather.variable} ${inter.variable} ${poppins.variable} antialiased bg-pale-blue text-charcoal relative h-full`}
      >
        <div className="flex flex-col min-h-full">
          <NavBar />
          <main className="flex-1 px-8 py-12">
            <div className="w-full mx-auto max-w-7xl">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
