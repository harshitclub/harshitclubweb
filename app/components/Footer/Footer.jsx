import React from "react";
import "./style.css";
import Link from "next/link";
import { vibrate } from "../Vibrate/Vibrate";

export default function Footer() {
  return (
    <footer className="flex width100 flexColumn">
      <div className="footerContainer flex spaceBtw width100  alignStart maxWidth width90">
        <div className="footerTab">
          <h2>Pages</h2>
          <ul>
            <li>
              <Link href="/" onClick={vibrate}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/skills" onClick={vibrate}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={vibrate}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={vibrate}>
                About
              </Link>
            </li>
            <li>
              <Link href="/my-story" onClick={vibrate}>
                My Story
              </Link>
            </li>
          </ul>
        </div>

        <div className="footerTab">
          <h2>Social</h2>
          <ul>
            <li>
              <Link
                href="https://linkedin.com/in/harshitclub"
                target="_blank"
                onClick={vibrate}
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/harshitclub"
                target="_blank"
                onClick={vibrate}
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/harshitclub"
                target="_blank"
                onClick={vibrate}
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/harshitclub"
                target="_blank"
                onClick={vibrate}
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={vibrate}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footerTab">
          <h2>Legal Pages</h2>
          <ul>
            <li>
              <Link href="/privacy-and-policy" onClick={vibrate}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" onClick={vibrate}>
                Terms Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="footerTab fContactMail">
          <h2>Harshit Kumar</h2>
          <p>
            <Link href="mailto:harshitclub@gmail.com" onClick={vibrate}>
              harshitclub@gmail.com
            </Link>
          </p>
        </div>
      </div>
      <div className="copyRight">
        <p>
          Copyright © 2023{" "}
          <Link href="https://harshitclub.com" onClick={vibrate}>
            harshitclub.com
          </Link>{" "}
          | All Right Reserved
        </p>
      </div>
    </footer>
  );
}
