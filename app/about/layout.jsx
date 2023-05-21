import PageHeader from "../components/PageHeader/PageHeader";

export const metadata = {
  title: "About - Harshit Kumar Full Stack Web Developer",
  description:
    "Learn more about Harshit Kumar, a Full Stack Web Developer skilled in JavaScript, Next.js, React.js, Node.js, and more. Discover his experience, education, and career journey.",
  alternates: {
    canonical: "https://www.harshitclub.com/about",
  },
};

export default function AboutLayout({ children }) {
  return (
    <main className="about flex flexColumn width100">
      <PageHeader heading="About Harshit Kumar" />
      {children}
    </main>
  );
}
