import PageHeader from "../components/PageHeader/PageHeader";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "Our Terms and Conditions provide guidelines and rules for the use of our website. By accessing and using our site, you agree to comply with these terms.",
  alternates: {
    canonical: "https://www.harshitclub.com/terms-and-conditions",
  },
};

export default function TermsLayout({ children }) {
  return (
    <main className="terms width100 flex flexColumn width100">
      <PageHeader heading="Terms & Conditions" />
      {children}
    </main>
  );
}
