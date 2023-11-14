import { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader/PageHeader";
export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Harshit Kumar, a Full Stack Web Developer skilled in JavaScript, Next.js, React.js, Node.js, and more. Discover his experience, education, and career journey.",
  alternates: {
    canonical: "https://www.harshitclub.com/about",
  },
  openGraph: {
    type: "website",
    title: "About - Harshit Kumar",
    description:
      "Learn more about Harshit Kumar, a Full Stack Web Developer skilled in JavaScript, Next.js, React.js, Node.js, and more. Discover his experience, education, and career journey.",
    url: "https://www.harshitclub.com/about",
    siteName: "harshitclub",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="about flex flexColumn width100">
      <PageHeader heading="About Harshit Kumar" />
      {children}
    </main>
  );
}
