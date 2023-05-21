import React from "react";
import "./style.css";
import { RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";
import PageHeader from "../components/PageHeader/PageHeader";

export const metadata = {
  title: "Skills - Harshit Kumar Full Stack Web Developer",
  description:
    "Discover my skills in web development and design, including frontend technologies like HTML, CSS, and React, and backend technologies like Node.js and Express.js.",
  alternates: {
    canonical: "https://www.harshitclub.com/skills",
  },
};

export default function Skills() {
  return (
    <main className="skills flex flexColumn width100">
      <PageHeader heading="Harshit Kumar Skills" />
      <section className="skillsContainer flex flexColumn maxWidth width90 alignStart">
        <div className="allSkills">
          <h2>Frontend</h2>
          <p>
            <span>HTML5</span>, <span>CSS3</span>, <span>SCSS</span>,{" "}
            <span>JavaScript</span>,{" "}
            <span>
              <Link href="https://react.dev/" target="_blank">
                React.js <RiExternalLinkLine className="allSkillsIcon" />
              </Link>
            </span>
            ,{" "}
            <span>
              <Link href="https://nextjs.org/" target="_blank">
                Next.Js <RiExternalLinkLine className="allSkillsIcon" />
              </Link>
            </span>
            ,{" "}
            <span>
              <Link href="https://mui.com/" target="_blank">
                Material UI <RiExternalLinkLine className="allSkillsIcon" />
              </Link>
            </span>
            ,{" "}
            <span>
              <Link href="https://react-bootstrap.github.io/" target="_blank">
                Bootstrap <RiExternalLinkLine className="allSkillsIcon" />
              </Link>
            </span>
          </p>

          <h2>Backend</h2>
          <p>
            <span>
              <Link href="https://nodejs.org/" target="_blank">
                Node.js <RiExternalLinkLine className="allSkillsIcon" />
              </Link>
            </span>
            ,{" "}
            <span>
              <Link href="https://expressjs.com/" target="_blank">
                Express.js <RiExternalLinkLine className="allSkillsIcon" />
              </Link>
            </span>
          </p>
          <h2>Database</h2>
          <p>
            <span>
              <Link href="https://www.mongodb.com/" target="_blank">
                MongoDB <RiExternalLinkLine className="allSkillsIcon" />
              </Link>
            </span>
            , <span>MySQL</span>
          </p>
          <h2>Testing</h2>
          <p>
            <span>
              <Link href="https://www.postman.com/" target="_blank">
                Postman <RiExternalLinkLine className="allSkillsIcon" />
              </Link>
            </span>
            ,{" "}
            <span>
              <Link href="https://insomnia.rest/" target="_blank">
                Insomnia <RiExternalLinkLine className="allSkillsIcon" />
              </Link>
            </span>
          </p>
          <div className="deployment">
            <h2>Deployment</h2>
            <p>
              <span>
                <Link href="https://aws.amazon.com/" target="_blank">
                  AWS <RiExternalLinkLine className="allSkillsIcon" />
                </Link>
              </span>
              ,{" "}
              <span>
                <Link href="https://github.com/" target="_blank">
                  Github <RiExternalLinkLine className="allSkillsIcon" />
                </Link>
              </span>
              ,{" "}
              <span>
                <Link href="https://vercel.com/" target="_blank">
                  Vercel <RiExternalLinkLine className="allSkillsIcon" />
                </Link>
              </span>
              ,{" "}
              <span>
                <Link href="https://www.netlify.com/" target="_blank">
                  Netlify <RiExternalLinkLine className="allSkillsIcon" />
                </Link>
              </span>
              , <span>CPanel</span>
            </p>

            <h2>Other</h2>
            <p>
              <span>On-Page SEO</span>,{" "}
              <span>
                <Link href="https://wordpress.org/" target="_blank">
                  WordPress <RiExternalLinkLine className="allSkillsIcon" />
                </Link>
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
