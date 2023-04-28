import React from "react";
import "./style.css";
import { RiExternalLinkLine, RiGithubFill } from "react-icons/ri";
import { allProjects } from "@/app/projects/projects.js";
import Link from "next/link";

const myProjects = allProjects.slice(0, 3);
const myProjects2 = allProjects.slice(3, 6);

export default function Projects() {
  return (
    <section className="projectSection flex flexColumn width100">
      <div className="projectSContainer flex flexColumn alignStart maxWidth width90">
        <h2 className="margin1 font600">My Projects</h2>
        <div className="projectSParent width100 flex spaceBtw margin1">
          {myProjects.map((project) => {
            return (
              <>
                <div className="projectSChild" key={project.id}>
                  <div className="projectSBtns flex width100 spaceBtw">
                    <div className="projectSBtn">
                      <a href={project.codeLink} target="_blank">
                        <RiGithubFill className="projectSIcons" />
                      </a>
                    </div>
                    <div className="projectSBtn">
                      <a href={project.liveLink} target="_blank">
                        <RiExternalLinkLine className="projectSIcons" />
                      </a>
                    </div>
                  </div>
                  <h3 className="font600">{project.title}</h3>
                  <p className="margin1">{project.desc}</p>
                  <div className="projectSTech">
                    <p>{project.tech}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="projectSParent width100 flex spaceBtw margin1">
          {myProjects2.map((project) => {
            return (
              <>
                <div className="projectSChild" key={project.id}>
                  <div className="projectSBtns flex width100 spaceBtw">
                    <div className="projectSBtn">
                      <a href={project.codeLink} target="_blank">
                        <RiGithubFill className="projectSIcons" />
                      </a>
                    </div>
                    <div className="projectSBtn">
                      <a href={project.liveLink} target="_blank">
                        <RiExternalLinkLine className="projectSIcons" />
                      </a>
                    </div>
                  </div>
                  <h3 className="font600">{project.title}</h3>
                  <p className="margin1">{project.desc}</p>
                  <div className="projectSTech">
                    <p>{project.tech}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="projectShowMore width90 maxWidth">
        <Link href="/projects">
          <button>
            Show All <RiExternalLinkLine className="showMoreIcon" />
          </button>
        </Link>
      </div>
      <div className="borderBottom"></div>
    </section>
  );
}