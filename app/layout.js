import { Inter, Merriweather_Sans, Quicksand, Poppins } from "next/font/google";
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

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
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
    <html lang="en">
      <body
        className={`${merriweather.variable} ${inter.variable} ${quicksand.variable} ${poppins.variable} bg-cool-white h-full`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
