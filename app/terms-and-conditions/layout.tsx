import { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader/PageHeader";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Our Terms and Conditions provide guidelines and rules for the use of our website. By accessing and using our site, you agree to comply with these terms.",
  alternates: {
    canonical: "https://www.harshitclub.com/terms-and-conditions",
  },
  openGraph: {
    type: "website",
    title: "Terms & Conditions",
    siteName: "harshitclub",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="terms width100 flex flexColumn width100">
      <PageHeader heading="Terms & Conditions" />
      {children}
    </main>
  );
}
