import React from "react";
import "./style.css";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";
import Link from "next/link";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <section className="contactContainer flex alignStart maxWidth spaceBtw">
      <div className="contactCLeft width49">
        <ContactForm />
      </div>
      <div className="borderRight"></div>
      <div className="contactCRight width49 ">
        <div className="contactCRightContent">
          <h2>Let's Connect</h2>
          <p>
            In addition to the contact form on the left, there are several other
            ways to get in touch with me. You can follow me on social media,
            connect with me on LinkedIn, or send me an email. I am always happy
            to hear from visitors and potential clients.
          </p>
          <div className="contactSocial flex width100 justifyStart">
            <div className="contactSIcons">
              <Link href="https://linkedin.com/in/harshitclub" target="_blank">
                <RiLinkedinBoxFill />
              </Link>
            </div>
            <div className="contactSIcons">
              <Link href="https://github.com/harshitclub" target="_blank">
                <RiGithubFill />
              </Link>
            </div>
            <div className="contactSIcons">
              <Link href="https://twitter.com/harshitclub" target="_blank">
                <RiTwitterFill />
              </Link>
            </div>
            <div className="contactSIcons">
              <Link href="https://instagram.com/harshitclub" target="_blank">
                <RiInstagramFill />
              </Link>
            </div>
          </div>

          <h3>
            <Link href="mailto:contact@harshitclub.com">
              contact@harshitclub.com
            </Link>
          </h3>

          <p>
            Thank you for your interest in connecting with me. I'm excited to
            hear from you and learn more about your needs and goals. Don't
            hesitate to reach out, and I'll do my best to get back to you
            promptly.
          </p>
        </div>
      </div>
    </section>
  );
}
