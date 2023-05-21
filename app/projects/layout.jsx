import PageHeader from "../components/PageHeader/PageHeader";

export const metadata = {
  title: "Projects - Harshit Kumar Full Stack Web Developer",
  description:
    "Explore my latest web development projects showcasing my skills in HTML, CSS, JavaScript, React.js, Node.js, and more. View my portfolio and contact me for collaborations.",
  alternates: {
    canonical: "https://www.harshitclub.com/projects",
  },
};

export default function ProjectsLayout({ children }) {
  return (
    <main className="projects flex flexColumn width100">
      <PageHeader heading="Harshit Kumar Projects" />
      {children}
    </main>
  );
}
