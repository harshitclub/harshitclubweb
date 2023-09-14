import React from "react";
import "./style.css";
import { RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="contactSection flex flexColumn width100 marginMore">
      <div className="contactSContainer flex flexColumn maxWidth width90">
        <h2>Get In Touch</h2>
        <h3>
          Mail:{" "}
          <Link href="mailto:harshit@harshitclub.com">
            harshit@harshitclub.com{" "}
            <RiExternalLinkLine className="contactSIcon" />
          </Link>
        </h3>
      </div>
    </section>
  );
}
