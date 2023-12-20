import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { GeistSans, GeistMono } from "geist/font";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Harshit Kumar - Full Stack Web Developer",
  creator: "Harshit Kumar",
  description:
    "Harshit Kumar Portfolio Website, a full stack web developer proficient in frontend and backend technologies like React, Next, Node, Express, JavaScript, TypeScript. Explore My Work and Skills To know more.",
  alternates: {
    canonical: "https://www.harshitclub.com",
  },
  openGraph: {
    type: "website",
    title: "Harshit Kumar - Full Stack Web Developer",
    description:
      "Harshit Kumar Portfolio Website, a full stack web developer proficient in frontend and backend technologies like React, Next, Node, Express, JavaScript, TypeScript. Explore My Work and Skills To know more.",
    url: "https://harshitclub.com",
    siteName: "harshitclub",
    locale: "en_US",
    images: "../public/open-graph-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@harshitclub",
    creator: "@harshitclub",
  },
  verification: {
    google: "",
  },
  metadataBase: new URL("https://harshitclub.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className} ${GeistMono.variable}`}>
      <body>
        <Navbar />
        <NextTopLoader color="#111111" shadow="0" />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
