import React from "react";
import "./style.css";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";
import Link from "next/link";

export const metadata = {
  title: "Contact - Harshit Kumar Full Stack Web Developer",
  description:
    "Get in touch with Harshit Kumar, a full-stack web developer. Contact me for any queries or project collaborations.",
};

export default function Contact() {
  return (
    <main className="contact flex flexColumn width100">
      <section className="contactHeader flex width100">
        <h1>Reach Out To Me</h1>
      </section>
      <section className="contactContainer flex alignStart maxWidth spaceBtw">
        <div className="contactCLeft width49">
          <form className="width100">
            <div className="cInputs flex width100 spaceBtw">
              <div className="width49">
                <input placeholder="Name*" className="width100" />
              </div>
              <div className="width49">
                <input placeholder="Email*" className="width100" />
              </div>
            </div>
            <div className="cInputs flex width100 spaceBtw">
              <div className="width49">
                <input placeholder="Phone*" className="width100" />
              </div>
              <div className="width49">
                <input placeholder="Website If Any" className="width100" />
              </div>
            </div>
            <div className="cInputs flex width100 spaceBtw">
              <div className="width49">
                <input placeholder="Country" className="width100" />
              </div>
              <div className="width49">
                <input placeholder="Company" className="width100" />
              </div>
            </div>
            <div className="cInputs flex width100">
              <div className="width100">
                <select className="width100">
                  <option>Select Reason For Contacting</option>
                  <option>Services or pricing inquiry</option>
                  <option>Quote or proposal request</option>
                  <option>Technical assistance or support</option>
                  <option>Collaboration or partnership opportunities</option>
                  <option>Feedback or suggestions</option>
                  <option>Job or career inquiries</option>
                  <option>Invitations to speak or participate</option>
                  <option>Questions about qualifications or portfolio</option>
                  <option>Permission to use work or content</option>
                  <option>General inquiries or questions.</option>
                  <option>Other (Write It In Message)</option>
                </select>
              </div>
            </div>
            <div className="cInputs flex width100">
              <div className="width100">
                <textarea
                  placeholder="Your Message"
                  className="width100"
                  rows="4"
                />
              </div>
            </div>
            <div className=" flex width100">
              <div className="width100">
                <input type="submit" className="width100" />
              </div>
            </div>
          </form>
        </div>
        <div className="borderRight"></div>
        <div className="contactCRight width49 ">
          <div className="contactCRightContent">
            <h2>Let's Connect</h2>
            <p>
              In addition to the contact form on the left, there are several
              other ways to get in touch with me. You can follow me on social
              media, connect with me on LinkedIn, or send me an email. I am
              always happy to hear from visitors and potential clients.
            </p>
            <div className="contactSocial flex width100 justifyStart">
              <div className="contactSIcons">
                <Link
                  href="https://linkedin.com/in/harshitclub"
                  target="_blank"
                >
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
              <Link href="mailto:harshitclub@gmail.com">
                harshitclub@gmail.com
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
    </main>
  );
}
