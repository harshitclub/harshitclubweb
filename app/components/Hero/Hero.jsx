import React from "react";
import "./style.css";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";

export default function Hero() {
  return (
    <section className="hero flex flexColumn spaceBtw width100">
      <div className="heroContainer flex flexColumn maxWidth width90 alignStart">
        <h1>Harshit Kumar Web Developer</h1>
        <h2 className="margin2">
          Hey There, I'm <span>Harshit Kumar</span>, web developer who creates
          dynamic real world websites and web applications.
        </h2>

        <div className="heroBtns flex">
          <div className="heroBtn">
            <Link href="mailto:harshit@harshitclub.com">
              &nbsp;Mail <RiExternalLinkLine className="heroRBtnIcon" />
              &nbsp;
            </Link>
          </div>

          <div className="heroBtn">
            <Link href="/">
              Resume <BsDownload className="heroRBtnIcon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
