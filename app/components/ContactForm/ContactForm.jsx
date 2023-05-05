// "use client";
import React from "react";
import "./style.css";
import { vibrate } from "../Vibrate/Vibrate";

function ContactForm() {
  return (
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
          <textarea placeholder="Your Message" className="width100" rows="4" />
        </div>
      </div>
      <div className=" flex width100">
        <div className="width100">
          <input type="submit" className="width100" onClick={vibrate} />
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
