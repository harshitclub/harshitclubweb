import React from "react";
import "./style.css";
import { RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";
import { vibrate } from "../Vibrate/Vibrate";

export default function Contact() {
  return (
    <section className="contactSection flex flexColumn width100 marginMore">
      <div className="contactSContainer flex flexColumn maxWidth width90">
        <h2>Get In Touch</h2>
        <h3>
          Mail:{" "}
          <Link href="mailto:harshitclub@gmail.com" onClick={vibrate}>
            harshitclub@gmail.com{" "}
            <RiExternalLinkLine className="contactSIcon" />
          </Link>
        </h3>
      </div>
    </section>
  );
}
