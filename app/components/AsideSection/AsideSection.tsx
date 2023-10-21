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

interface TableOfContentItem {
  id: string;
  title: string;
}

interface AsideSectionProps {
  tableOfContent: TableOfContentItem[];
}

const AsideSection: React.FC<AsideSectionProps> = ({ tableOfContent }) => {
  return (
    <aside className="asideSection">
      <div className="asideMail">
        <h2>Table of Content</h2>
        <ul className="tableOfContent">
          {tableOfContent.map((item, index) => (
            <li key={index}>
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
        <p>
          <Link href="mailto:harshit@harshitclub.com">
            harshit@harshitclub.com
            <RiExternalLinkLine className="aboutExperienceIcon" />
          </Link>
        </p>
      </div>
      <div className="aboutAsideSocial">
        <Link href="https://github.com/harshitclub" target="_blank">
          <RiGithubFill />
        </Link>
        <Link href="https://linkedin.com/in/harshitclub" target="_blank">
          <RiLinkedinBoxFill />
        </Link>
        <Link href="https://twitter.com/harshitclub" target="_blank">
          <RiTwitterFill />
        </Link>
        <Link href="https://instagram.com/harshitclub" target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </aside>
  );
};

export default AsideSection;
