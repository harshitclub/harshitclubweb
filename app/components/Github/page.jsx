import React from "react";
import "./style.css";
import { RiExternalLinkLine, RiGithubFill } from "react-icons/ri";
import Link from "next/link";
import { vibrate } from "../Vibrate/Vibrate";

export default function Github() {
  return (
    <section className="githubSection flex width100 flexColumn">
      <div className="githubSContainer flex flexColumn maxWidth alignStart width90">
        <h2 className=" font600 margin1">My Github Profile</h2>
        <div className="githubSContent flex flexColumn width100">
          <div className="githubSIcon">
            <RiGithubFill />
          </div>
          <h3 className="marginMore">Hi 👋, I'm Harshit Kumar</h3>
          <Link
            href="https://github.com/harshitclub"
            target="_blank"
            onClick={vibrate}
          >
            <button>
              Github Profile <RiExternalLinkLine className="githubSFollowBtn" />
            </button>
          </Link>
        </div>
      </div>
      <div className="borderBottom"></div>
    </section>
  );
}
