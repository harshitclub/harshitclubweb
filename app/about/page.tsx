import React from "react";
import "./style.css";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";
import { BsDownload } from "react-icons/bs";
import AsideSection from "../components/AsideSection/AsideSection";

export default function About() {
  return (
    <section className="aboutContainer flex alignStart justifyCenter width90 maxWidth">
      <article className="aboutContent flex flexColumn alignStart">
        <p>
          Hi, I am Harshit Kumar, born and raised in the vibrant city of Meerut,
          Uttar Pradesh, India in 2001, I am a full stack web developer with a
          passion for both front-end and back-end technologies, I have the
          skills and expertise to create dynamic and engaging websites that will
          captivate the audience.
        </p>
        <p className="noMargin" id="aboutS2">
          Whether you need a simple landing page or a complex web application, I
          have the knowledge and experience to make it happen. From HTML5 and
          CSS3 to JavaScript and React.js, I use the latest technologies to
          ensure the website is not only visually stunning, but also performant
          and user-friendly.{" "}
        </p>
        <div className="borderBottom3"></div>
        <h2>First Computer Interaction</h2>
        <p>
          It all started in the year 2009, when I was just a tiny tot attending
          my play school. I still vividly remember the day when my computer
          teacher took us to the computer lab for the first time.
        </p>
        <p>
          As a curious child, I was in awe of this machine with a screen and
          keyboard. My teacher showed us how to operate the computer and gave us
          a task to type our names with the keyboard. As soon as I typed my
          name, I was overjoyed and felt a sense of accomplishment.{" "}
        </p>
        <p>
          Little did I know, this small interaction with a computer would change
          my life forever. From that day onwards, I started exploring the world
          of computers and technology, and my love for it only grew stronger
          with each passing day.
        </p>
        <p className="noMargin" id="aboutS3">
          And today, as a full-stack web developer, I am grateful for that one
          small moment that sparked my interest in this field.
        </p>
        <div className="borderBottom3"></div>
        <h2>How I Found My Passion</h2>
        <p>
          The journey of finding one's passion can happen in the most unexpected
          ways. For me, it was during my 10th class when I stumbled upon my IT
          book during a free lecture.
        </p>{" "}
        <p>
          As I read through the book's introduction, I came across some of the
          biggest names in tech like Larry Page, Mark Zuckerberg, Bill Gates,
          Satya Nadella, Sundar Pichai, etc. The book mentioned their success
          stories, and I was intrigued.
        </p>
        <p>
          As I delved deeper, I came across HTML and was fascinated by the
          endless possibilities it offered. In that moment, I knew that
          programming and business were my calling.
        </p>{" "}
        <p className="noMargin" id="aboutS4">
          This realization marked the beginning of my journey as a full-stack
          web developer, and I haven't looked back since.
        </p>
        <div className="borderBottom3"></div>
        <div className="aboutExperience noMargin">
          <h2>Work Experience</h2>
          <div className="flex justifyStart alignCenter">
            <p className="aboutPWidthExtra">Position</p>
            <span>Web Developer</span>
          </div>
          <div className="flex justifyStart alignCenter">
            <p className="aboutPWidthExtra">Company</p>
            <span id="aboutS5">
              <Link href="https://3alearningsolutions.com" target="_blank">
                3a Learning Solutions Pvt. Ltd
                <RiExternalLinkLine className="aboutExperienceIcon" />
              </Link>
            </span>
          </div>
          <div className="flex justifyStart alignCenter">
            <p className="aboutPWidthExtra">Duration</p>
            <span>May 2022 - Current</span>
          </div>
        </div>
        <div className="borderBottom3"></div>
        <div className="aboutEducation width100 noMargin">
          <h2>My Education</h2>
          <h3>Bachelor of Technology In Information Technology</h3>
          <div className=" flex justifyStart alignCenter">
            <p className="aboutPWidthExtra">Duration</p>
            <span>2021 - 2024</span>
          </div>
          <div className="ae1 flex justifyStart alignCenter">
            <p className="aboutPWidthExtra">University</p>
            <span>
              <Link href="https://aktu.ac.in/" target="_blank">
                Dr. A.P.J. Abdul Kalam Technical University
                <RiExternalLinkLine className="aboutExperienceIcon" />
              </Link>
            </span>
          </div>

          <h3>Polytechnic Diploma In Computer Science</h3>
          <div className="flex justifyStart alignCenter">
            <p className="aboutPWidthExtra">Duration</p>
            <span>2018 - 2021</span>
          </div>
          <div className="ae2 flex justifyStart alignCenter">
            <p className="aboutPWidthExtra">University</p>
            <span>
              <Link href="https://bteup.ac.in/" target="_blank">
                Board of Technical Education UP
                <RiExternalLinkLine className="aboutExperienceIcon" />
              </Link>
            </span>
          </div>

          <h3>10th Standard</h3>
          <div className="flex justifyStart alignCenter">
            <p id="aboutS6" className="aboutPWidthExtra">
              Duration
            </p>
            <span>2017 - 2018</span>
          </div>
          <div className="flex justifyStart alignCenter">
            <p className="aboutPWidthExtra">Board</p>
            <span>
              <Link href="https://www.cbse.gov.in/" target="_blank">
                Central Board of Secondary Eduction
                <RiExternalLinkLine className="aboutExperienceIcon" />
              </Link>
            </span>
          </div>
        </div>
        <div className="borderBottom3"></div>
        <div className="aboutSkills noMargin">
          <h2>Skills</h2>
          <p>
            Frontend: <span>HTML5 | CSS3 | SCSS | React.js | Next.js</span>
          </p>
          <p>
            Backend: <span>Node.js | Express</span>
          </p>
          <p>
            Database: <span>MongoDB | MySQL</span>
          </p>
          <p>
            Version Control: <span>Git & Github</span>
          </p>
          <p>
            Other:{" "}
            <span>Material UI | Bootstrap | On-Page SEO | WordPress</span>
          </p>
          <p>
            Deployment: <span>Github | Vercel | Netfily | CPanel</span>
          </p>
          <p>
            Testing: <span>Postman | Insomnia</span>
          </p>
        </div>
      </article>
      <AsideSection
        tableOfContent={[
          { id: "aboutS1", title: "Introduction" },
          { id: "aboutS2", title: "First Computer Interaction" },
          { id: "aboutS3", title: "How I Found My Passion" },
          { id: "aboutS4", title: "Work Experience" },
          { id: "aboutS5", title: "My Education" },
          { id: "aboutS6", title: "Skills" },
          { id: "aboutS7", title: "Download My Resume" },
        ]}
      />
    </section>
  );
}
