import PageHeader from "../components/PageHeader/PageHeader";

export const metadata = {
  title: "Privacy & Policy",
  description:
    "Protecting your privacy is our top priority. Read our privacy policy to learn about how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://www.harshitclub.com/privacy-and-policy",
  },
};

export default function PrivacyLayout({ children }) {
  return (
    <main className="pPolicy flex flexColumn width100">
      <PageHeader heading="Privacy & Policy" />
      {children}
    </main>
  );
}
