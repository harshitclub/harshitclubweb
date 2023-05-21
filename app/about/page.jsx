import React from "react";
import "./style.css";
import Link from "next/link";
import {
  RiExternalLinkLine,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";
import { BsDownload } from "react-icons/bs";

export default function About() {
  return (
    <section className="aboutContainer flex flexColumn maxWidth alignStart width60">
      <p>
        Hi, I am Harshit Kumar, born and raised in the vibrant city of Meerut,
        Uttar Pradesh, India in 2001, I am a full stack web developer with a
        passion for both front-end and back-end technologies, I have the skills
        and expertise to create dynamic and engaging websites that will
        captivate the audience.
      </p>
      <p className="noMargin">
        Whether you need a simple landing page or a complex web application, I
        have the knowledge and experience to make it happen. From HTML5 and CSS3
        to JavaScript and React.js, I use the latest technologies to ensure the
        website is not only visually stunning, but also performant and
        user-friendly.{" "}
      </p>
      <div className="borderBottom3"></div>
      <h2>First Computer Interaction</h2>
      <p>
        It all started in the year 2009, when I was just a tiny tot attending my
        play school. I still vividly remember the day when my computer teacher
        took us to the computer lab for the first time.
      </p>
      <p>
        As a curious child, I was in awe of this machine with a screen and
        keyboard. My teacher showed us how to operate the computer and gave us a
        task to type our names with the keyboard. As soon as I typed my name, I
        was overjoyed and felt a sense of accomplishment.{" "}
      </p>
      <p>
        Little did I know, this small interaction with a computer would change
        my life forever. From that day onwards, I started exploring the world of
        computers and technology, and my love for it only grew stronger with
        each passing day.
      </p>
      <p className="noMargin">
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
        As I delved deeper, I came across HTML and was fascinated by the endless
        possibilities it offered. In that moment, I knew that programming and
        business were my calling.
      </p>{" "}
      <p className="noMargin">
        This realization marked the beginning of my journey as a full-stack web
        developer, and I haven't looked back since.
      </p>
      <div className="borderBottom3"></div>
      <div className="aboutExperience noMargin">
        <h2>Work Experience</h2>
        <p>
          Position: <span>Web Developer</span>
        </p>
        <p>
          Company:{" "}
          <span>
            <Link href="https://3alearningsolutions.com" target="_blank">
              3a Learning Solutions Pvt. Ltd
              <RiExternalLinkLine className="aboutExperienceIcon" />
            </Link>
          </span>
        </p>
        <p>
          Duration: <span>[May 2022 - Current]</span>
        </p>
      </div>
      <div className="borderBottom3"></div>
      <div className="aboutEducation width100 noMargin">
        <h2>My Education</h2>
        <h3>Bachelor of Technology In Information Technology</h3>
        <p>
          Duration: <span>[2021 - 2024]</span>
        </p>
        <p className="marginBottom1">
          University:{" "}
          <span>
            <Link href="https://aktu.ac.in/" target="_blank">
              Dr. A.P.J. Abdul Kalam Technical University
              <RiExternalLinkLine className="aboutExperienceIcon" />
            </Link>
          </span>
        </p>
        <h3>Polytechnic Diploma In Computer Science</h3>
        <p>
          Duration: <span>[2018 - 2021]</span>
        </p>
        <p className="marginBottom1">
          University:{" "}
          <span>
            <Link href="https://bteup.ac.in/" target="_blank">
              Board of Technical Education UP
              <RiExternalLinkLine className="aboutExperienceIcon" />
            </Link>
          </span>
        </p>
        <h3>10th Standard</h3>
        <p>
          Duration: <span>[2017 - 2018]</span>
        </p>
        <p>
          Board:{" "}
          <span>
            <Link href="https://www.cbse.gov.in/" target="_blank">
              Central Board of Secondary Eduction
              <RiExternalLinkLine className="aboutExperienceIcon" />
            </Link>
          </span>
        </p>
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
          Other: <span>Material UI | Bootstrap | On-Page SEO | WordPress</span>
        </p>
        <p>
          Deployment: <span>Github | Vercel | Netfily | CPanel</span>
        </p>
        <p>
          Testing: <span>Postman | Insomnia</span>
        </p>
      </div>
      <div className="borderBottom3"></div>
      <div className="aboutResume noMargin">
        <h2>Download My Resume</h2>
        <button>
          <Link href="/">
            Download Resume <BsDownload className="aboutDResumeBtn" />
          </Link>
        </button>
      </div>
      <div className="borderBottom3"></div>
      <div className="aboutSocial noMargin">
        <h2>My Social Profiles</h2>
        <div className="aboutSIcons flex alignStart width100 justifyStart">
          <div className="aboutSIcon">
            <Link href="https://github.com/harshitclub" target="_blank">
              <RiGithubFill />
            </Link>
          </div>
          <div className="aboutSIcon">
            <Link href="https://linkedin.com/in/harshitclub" target="_blank">
              <RiLinkedinBoxFill />
            </Link>
          </div>
          <div className="aboutSIcon">
            <Link href="https://twitter.com/harshitclub" target="_blank">
              <RiTwitterFill />
            </Link>
          </div>
          <div className="aboutSIcon">
            <Link href="https://instagram.com/harshitclub" target="_blank">
              <RiInstagramFill />
            </Link>
          </div>
        </div>
      </div>
      <div className="borderBottom3"></div>
      <div className="aboutEmail">
        <h2>My Email</h2>
        <p>
          Mail:{" "}
          <Link href="mailto:harshitclub@gmail.com">
            harshitclub@gmail.com
            <RiExternalLinkLine className="aboutExperienceIcon" />
          </Link>
        </p>
      </div>
    </section>
  );
}
