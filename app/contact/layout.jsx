import PageHeader from "../components/PageHeader/PageHeader";

export const metadata = {
  title: "Contact - Harshit Kumar Full Stack Web Developer",
  description:
    "Get in touch with Harshit Kumar, a full-stack web developer. Contact me for any queries or project collaborations.",
  alternates: {
    canonical: "https://www.harshitclub.com/contact",
  },
};

export default function ContactLayout({ children }) {
  return (
    <main className="contact flex flexColumn width100">
      <PageHeader heading="Reach Out To Me" />
      {children}
    </main>
  );
}
