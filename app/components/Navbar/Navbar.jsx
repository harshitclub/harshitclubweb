"use client";

import React, { useEffect, useState } from "react";
import "./style.css";
import { HarshitLogo } from "../HarshitLogo/Logo";
import { HarshitLogoW } from "../HarshitLogo/Logo";
import { BiMenu } from "react-icons/bi";
import { BsDownload } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";
import { vibrate } from "../Vibrate/Vibrate";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    navigator.vibrate(100);
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
            <a href="/" onClick={vibrate}>
              {color ? <HarshitLogoW /> : <HarshitLogo />}
            </a>
          </div>
          <button className="rMenuBtn">
            <BiMenu onClick={toggleMenu} />
          </button>
          <div className={`menu ${showMenu ? "showNav" : ""}`}>
            <ul className="flex">
              <li>
                <a href="/" onClick={vibrate}>
                  Home
                </a>
              </li>
              <li>
                <a href="/skills" onClick={vibrate}>
                  Skills
                </a>
              </li>
              <li>
                <a href="/projects" onClick={vibrate}>
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" onClick={vibrate}>
                  About
                </a>
              </li>
              <li>
                <a href="/my-story" onClick={vibrate}>
                  My Story
                </a>
              </li>
              <li>
                <a href="/contact" onClick={vibrate}>
                  Contact
                </a>
              </li>
              <li className="navMail">
                <a href="mailto:harshitclub@gmail.com" onClick={vibrate}>
                  Mail <RiExternalLinkLine className="navMailIcon" />
                </a>
              </li>
              <li className="navMail mNavResume">
                <a href="/" onClick={vibrate}>
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
