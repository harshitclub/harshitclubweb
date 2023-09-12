import React from "react";
import "./style.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex width100 flexColumn">
      <div className="footerContainer flex spaceBtw width100  alignStart maxWidth width90">
        <div className="footerTab">
          <h2>Pages</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/skills">Skills</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/my-story">My Story</Link>
            </li>
          </ul>
        </div>

        <div className="footerTab">
          <h2>Social</h2>
          <ul>
            <li>
              <Link href="https://linkedin.com/in/harshitclub" target="_blank">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://github.com/harshitclub" target="_blank">
                Github
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/harshitclub" target="_blank">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/harshitclub" target="_blank">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footerTab">
          <h2>Legal Pages</h2>
          <ul>
            <li>
              <Link href="/privacy-and-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">Terms Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="footerTab fContactMail">
          <h2>Harshit Kumar</h2>
          <p>
            <Link href="mailto:harshit@harshitclub.com">
              harshit@harshitclub.com
            </Link>
          </p>
        </div>
      </div>
      <div className="copyRight">
        <p>
          Copyright © 2023{" "}
          <Link href="https://harshitclub.com">harshitclub.com</Link> | All
          Right Reserved
        </p>
      </div>
    </footer>
  );
}
