import { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader/PageHeader";
export const metadata: Metadata = {
  title: "My Story",
  description:
    "Discover my journey of becoming a Full Stack Web Developer. From my first interaction with a computer to choosing programming as my career, read my story here.",
  openGraph: {
    type: "website",
    title: "My Story",
    siteName: "harshitclub",
  },
};

export default function MyStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="myStory flex flexColumn width100">
      <PageHeader heading="Harshit Kumar Story" />
      {children}
    </main>
  );
}
