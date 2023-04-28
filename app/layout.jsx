import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
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
  alternates: {
    canonical: "https://www.harshitclub.com",
  },
  openGraph: {
    type: "website",
    url: "https://harshitclub.com/",
    title: "Harshit Kumar - Full Stack Web Developer",
    siteName: "harshitclub",
    description:
      "Harshit Kumar Portfolio Website, a full stack web developer proficient in frontend and backend technologies like React, Next, Node, Express, JavaScript, TypeScript.",
    locale: "en-US",
  },
  twitter: {
    url: "https://harshitclub.com/",
    title: "Harshit Kumar - Full Stack Web Developer",
    description:
      "Harshit Kumar Portfolio Website, a full stack web developer proficient in frontend and backend technologies like React, Next, Node, Express, JavaScript, TypeScript.",
    creator: "Harshit Kumar",
  },
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
