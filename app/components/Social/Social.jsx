import React from "react";
import "./style.css";
import { RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";
import { vibrate } from "../Vibrate/Vibrate";

export default function Social() {
  return (
    <section className="socialSection flex flexColumn width100">
      <div className="socialSContainer flex flexColumn alignStart maxWidth width90">
        <h2>My Social Profiles</h2>

        <div className="socialSProfiles flex width100 spaceBtw">
          <div className="socialSProfile flex github">
            <h3>
              <Link
                href="https://github.com/harshitclub"
                target="_blank"
                onClick={vibrate}
              >
                Github <RiExternalLinkLine className="socialSIcons" />
              </Link>
            </h3>
          </div>
          <div className="socialSProfile flex linkedin">
            <h3>
              <Link
                href="https://linkedin.com/in/harshitclub"
                target="_blank"
                onClick={vibrate}
              >
                LinkedIn <RiExternalLinkLine className="socialSIcons" />
              </Link>
            </h3>
          </div>
          <div className="socialSProfile flex twitter">
            <h3>
              <Link
                href="https://twitter.com/harshitclub"
                target="_blank"
                onClick={vibrate}
              >
                Twitter <RiExternalLinkLine className="socialSIcons" />
              </Link>
            </h3>
          </div>
          <div className="socialSProfile flex instagram">
            <h3>
              <Link
                href="https://instagram.com/harshitclub"
                target="_blank"
                onClick={vibrate}
              >
                Instagram <RiExternalLinkLine className="socialSIcons" />
              </Link>
            </h3>
          </div>
        </div>
      </div>
      <div className="borderBottom"></div>
    </section>
  );
}
