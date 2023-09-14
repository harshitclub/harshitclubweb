"use client";

import React, { useEffect, useState } from "react";
import "./style.css";
import { HarshitLogo } from "../HarshitLogo/Logo";
import { HarshitLogoW } from "../HarshitLogo/Logo";
import { BiMenu } from "react-icons/bi";
import { BsDownload } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";

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
      <nav className={`${color ? "sNav" : ""}`}>
        <div className="navContainer flex spaceBtw width90 maxWidth">
          <div className="navLogo flex ali">
            <a href="/">{color ? <HarshitLogoW /> : <HarshitLogo />}</a>
          </div>
          <div className="rMenuBtn">
            <BiMenu onClick={toggleMenu} />
          </div>
          <div className={`menu ${showMenu ? "showNav" : ""}`}>
            <ul className="flex">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/skills">Skills</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/my-story">My Story</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
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
