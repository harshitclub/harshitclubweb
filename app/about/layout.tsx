import { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader/PageHeader";
export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Harshit Kumar, a Full Stack Web Developer skilled in JavaScript, Next.js, React.js, Node.js, and more. Discover his experience, education, and career journey.",
  openGraph: {
    type: "website",
    title: "About",
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
