import { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader/PageHeader";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Harshit Kumar, a full-stack web developer. Contact me for any queries or project collaborations.",
  openGraph: {
    type: "website",
    title: "Contact",
    siteName: "harshitclub",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="contact flex flexColumn width100">
      <PageHeader heading="Reach Out To Me" />
      {children}
    </main>
  );
}
