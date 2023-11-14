import { Metadata } from "next";
import PageHeader from "../components/PageHeader/PageHeader";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Explore insightful articles and engaging content on my blogs page. Discover a wealth of knowledge, tips, and inspiration in a variety of technical and development topics.",
  alternates: {
    canonical: "https://harshitclub.com/blogs",
  },
  openGraph: {
    type: "website",
    title: "Blogs",
    description:
      "Explore insightful articles and engaging content on my blogs page. Discover a wealth of knowledge, tips, and inspiration in a variety of technical and development topics.",
    url: "https://harshitclub.com/blogs",
    siteName: "harshitclub",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="blogs flex flexColumn width100">
      <PageHeader heading="Blogs" />
      {children}
    </main>
  );
}
