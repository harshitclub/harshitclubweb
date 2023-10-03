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
        <div className="projectSHeader flex spaceBtw width100 alignCenter justifyCenter margin1 maxWidth">
          <h2 className="font600">My Projects</h2>

          <Link href="/projects">
            <button>
              Show All <RiExternalLinkLine className="showMoreIcon" />
            </button>
          </Link>
        </div>
        <div className="projectSParent width100 flex spaceBtw">
          {myProjects.map((project) => {
            return (
              <>
                <div className="projectSChild" key={project.id}>
                  <div className="projectSBtns flex width100 spaceBtw">
                    <div className="projectSBtn">
                      <a href={project.codeLink} target="_blank">
                        <span className="spanHidden">Github</span>
                        <RiGithubFill className="projectSIcons" />
                      </a>
                    </div>
                    <div className="projectSBtn">
                      <a href={project.liveLink} target="_blank">
                        <span className="spanHidden">Live Link</span>
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
        <div className="projectSParent width100 flex spaceBtw ">
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
                        <span className="spanHidden">Live Link</span>
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
    </section>
  );
}
