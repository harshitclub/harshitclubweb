import PageHeader from "../components/PageHeader/PageHeader";

export const metadata = {
  title: "Skills - Harshit Kumar Full Stack Web Developer",
  description:
    "Discover my skills in web development and design, including frontend technologies like HTML, CSS, and React, and backend technologies like Node.js and Express.js.",
  alternates: {
    canonical: "https://www.harshitclub.com/skills",
  },
};

export default function SkillsLayout({ children }) {
  return (
    <main className="skills flex flexColumn width100">
      <PageHeader heading="Harshit Kumar Skills" />
      {children}
    </main>
  );
}
