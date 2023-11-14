import React from "react";
import "./style.css";
import { RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";

export default function Social() {
  return (
    <section className="socialSection flex flexColumn width100">
      <div className="socialSContainer flex flexColumn alignStart maxWidth width90">
        <div className="socialSProfiles flex width100 spaceBtw">
          <div className="socialSProfile flex github">
            <Link href="https://github.com/harshitclub" target="_blank">
              <h3>
                Github <RiExternalLinkLine className="socialSIcons" />
              </h3>
            </Link>
          </div>
          <div className="socialSProfile flex linkedin">
            <Link href="https://linkedin.com/in/harshitclub" target="_blank">
              <h3>
                LinkedIn <RiExternalLinkLine className="socialSIcons" />
              </h3>
            </Link>
          </div>
          <div className="socialSProfile flex twitter">
            <Link href="https://twitter.com/harshitclub" target="_blank">
              <h3>
                Twitter <RiExternalLinkLine className="socialSIcons" />
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
