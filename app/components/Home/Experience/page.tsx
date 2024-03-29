import React from "react";
import "./style.css";
import Link from "next/link";
import { RiArrowDropDownLine, RiExternalLinkLine } from "react-icons/ri";

export default function Experience() {
  return (
    <section className="exSection flex width100 flexColumn ">
      <div className="exSContainer flex flexColumn maxWidth alignStart width90">
        <h2 className="font600 margin1">Work Experience</h2>
        <div className="exBox width100">
          <div className="exFirst">
            <h3>
              Position
              <RiArrowDropDownLine className="exHeadIcons" />
            </h3>
            <p>Web Developer</p>

            <h3>
              Company
              <RiArrowDropDownLine className="exHeadIcons" />
            </h3>
            <p>
              <Link href="https://3alearningsolutions.com">
                3a Learning Solutions India Pvt. Ltd{" "}
                <RiExternalLinkLine className="exIcon" />
              </Link>
            </p>
            <h3>
              Duration
              <RiArrowDropDownLine className="exHeadIcons" />
            </h3>
            <p>2022 May - Current</p>
            <h3>
              Skills Used
              <RiArrowDropDownLine className="exHeadIcons" />
            </h3>
            <p>MERN Stack | Next.js | On-Page SEO</p>
            <p>
              Full Stack Web Developer in 3a Learning Solutions, Build and
              Manage Full Stack Professional Websites Specially in Javascript
              MERN Stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
