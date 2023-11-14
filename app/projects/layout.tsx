import { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader/PageHeader";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my latest web development projects showcasing my skills in HTML, CSS, JavaScript, React.js, Node.js, and more. View my portfolio and contact me for collaborations.",
  alternates: {
    canonical: "https://www.harshitclub.com/projects",
  },
  openGraph: {
    type: "website",
    title: "Projects - Harshit Kumar",
    description:
      "Explore my latest web development projects showcasing my skills in HTML, CSS, JavaScript, React.js, Node.js, and more. View my portfolio and contact me for collaborations.",
    url: "https://www.harshitclub.com/projects",
    siteName: "harshitclub",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="projects flex flexColumn width100">
      <PageHeader heading="Harshit Kumar Projects" />
      {children}
    </main>
  );
}
