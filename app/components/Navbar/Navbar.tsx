"use client";

import React, { useEffect, useState } from "react";
import "./style.css";
import { HarshitLogo } from "../HarshitLogo/Logo";
import { BiMenu } from "react-icons/bi";
// import { BsDownload } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";
import { BsX } from "react-icons/bs";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    navigator.vibrate(100);
    if (showMenu === false) {
      setShowMenu(true);
      // document.body.style.overflow = "hidden";
    } else {
      setShowMenu(false);
      // document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  return (
    <header>
      <nav>
        <div className="navContainer flex spaceBtw width90 maxWidth">
          <div className="navLogo flex ali">
            <Link href="/">
              <HarshitLogo />
            </Link>
          </div>
          <div className="rMenuBtn">
            {!showMenu ? (
              <BiMenu onClick={toggleMenu} />
            ) : (
              <BsX onClick={toggleMenu} />
            )}
          </div>
          <div className={`menu ${showMenu ? "showNav" : ""}`}>
            <ul className="flex">
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li className="navMail">
                <Link href="mailto:harshitclub@gmail.com">
                  Mail <RiExternalLinkLine className="navMailIcon" />
                </Link>
              </li>
              {/* <li className="navMail mNavResume">
                <Link href="/">
                  Resume &nbsp;
                  <BsDownload className="navResumeIcon" />
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
