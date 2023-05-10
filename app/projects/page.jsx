import React from "react";
import "./style.css";
// import SearchProject from "../components/SearchProject/SearchProject";
import { RiExternalLinkLine, RiGithubFill } from "react-icons/ri";
import { allProjects } from "./projects.js";

export const metadata = {
  title: "Projects - Harshit Kumar Full Stack Web Developer",
  description:
    "Explore my latest web development projects showcasing my skills in HTML, CSS, JavaScript, React.js, Node.js, and more. View my portfolio and contact me for collaborations.",
  alternates: {
    canonical: "https://www.harshitclub.com/projects",
  },
};

export default function Projects() {
  return (
    <main className="projects flex flexColumn width100">
      <section className="projectsHeader flex width100">
        <h1>Harshit Kumar Projects</h1>
      </section>
      <section className="projectsContainer flex flexColumn alignStart maxWidth width90">
        <div className="allProjectsTab flex">
          {allProjects.map((project) => {
            return (
              <>
                <div className="allProjectBox" key={project.id}>
                  <div className="allProjectBtns flex width100 spaceBtw">
                    <div className="allProjectBtn">
                      <a href={project.codeLink} target="_blank">
                        <span>Code Link</span>
                        <RiGithubFill className="projectSIcons" />
                      </a>
                    </div>
                    <div className="allProjectBtn">
                      <a href={project.liveLink} target="_blank">
                        <span>Live Link</span>
                        <RiExternalLinkLine className="projectSIcons" />
                      </a>
                    </div>
                  </div>

                  <h3 className="font600">{project.title}</h3>
                  <p className="margin1">{project.desc}</p>
                  <div className="allProjectTech">
                    <p>{project.tech}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </main>
  );
}
