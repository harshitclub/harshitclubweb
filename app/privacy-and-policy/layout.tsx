import { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader/PageHeader";
export const metadata: Metadata = {
  title: "Privacy & Policy",
  description:
    "Protecting your privacy is our top priority. Read our privacy policy to learn about how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://www.harshitclub.com/privacy-and-policy",
  },
  openGraph: {
    type: "website",
    title: "Privacy & Policy",
    siteName: "harshitclub",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pPolicy flex flexColumn width100">
      <PageHeader heading="Privacy & Policy" />
      {children}
    </main>
  );
}
