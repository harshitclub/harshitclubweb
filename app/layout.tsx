import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Poppins, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harshit Kumar - Full Stack Web Developer",
  creator: "Harshit Kumar",
  description:
    "Harshit Kumar Portfolio Website, a full stack web developer proficient in frontend and backend technologies like React, Next, Node, Express, JavaScript, TypeScript. Explore My Work and Skills To know more.",
  keywords: [
    "Harshit Kumar Web Developer",
    "Harshit Kumar",
    "Full Stack Web Developer",
    "React",
    "Node",
    "Express",
    "MERN",
    "Next",
    "MongoDB",
    "Developer",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    title: "Harshit Kumar - Full Stack Web Developer",
    siteName: "harshitclub",
  },
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  weight: ["400", "500", "700"],
  style: ["normal"],
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className} ${caveat.variable}`}>
      <body>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
