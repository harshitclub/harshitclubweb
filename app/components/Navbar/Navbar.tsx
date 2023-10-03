"use client";

import React, { useEffect, useState } from "react";
import "./style.css";
import { HarshitLogo } from "../HarshitLogo/Logo";
import { BiFolder, BiInfoCircle, BiMenu, BiPhone } from "react-icons/bi";
import { BsDownload } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";
import { DiCodeBadge } from "react-icons/di";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    if (showMenu === false) {
      setShowMenu(true);
      document.body.style.overflow = "hidden";
    } else {
      setShowMenu(false);
      document.body.style.overflow = "auto";
    }
  };

  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header>
      <nav>
        <div className="navContainer flex spaceBtw width90 maxWidth">
          <div className="navLogo flex ali">
            <a href="/">
              <HarshitLogo />
            </a>
          </div>
          <div className="rMenuBtn">
            <BiMenu onClick={toggleMenu} />
          </div>
          <div className={`menu ${showMenu ? "showNav" : ""}`}>
            <ul className="flex">
              <li>
                <a href="/projects">
                  <BiFolder className="navIcons" /> Projects
                </a>
              </li>
              <li>
                <a href="/about">
                  <BiInfoCircle className="navIcons" /> About
                </a>
              </li>
              {/* <li>
                <a href="/my-story">My Story</a>
              </li> */}
              <li>
                <a href="/contact">
                  <BiPhone className="navIcons" /> Contact
                </a>
              </li>
              <li className="navMail">
                <a href="mailto:harshitclub@gmail.com">
                  Mail <RiExternalLinkLine className="navMailIcon" />
                </a>
              </li>
              <li className="navMail mNavResume">
                <a href="/">
                  Resume &nbsp;
                  <BsDownload className="navResumeIcon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
