import { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader/PageHeader";
export const metadata: Metadata = {
  title: "Skills",
  description:
    "Discover my skills in web development and design, including frontend technologies like HTML, CSS, and React, and backend technologies like Node.js and Express.js.",
  openGraph: {
    type: "website",
    title: "Skills",
    siteName: "harshitclub",
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="skills flex flexColumn width100">
      <PageHeader heading="Harshit Kumar Skills" />
      {children}
    </main>
  );
}
