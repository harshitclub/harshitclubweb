"use client";
import React, { useState } from "react";
import "./style.css";

function ContactForm() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    country: "",
    company: "",
    reason: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setMessage((prevMessage) => ({ ...prevMessage, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          name: message.name,
          email: message.email,
          phone: message.phone,
          website: message.website,
          country: message.country,
          company: message.company,
          reason: message.reason,
          message: message.message,
        }),
      });
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setMessage({
          name: "",
          email: "",
          phone: "",
          website: "",
          country: "",
          company: "",
          reason: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <form className="width100" onSubmit={handleSubmit}>
      <div className="cInputs flex width100 spaceBtw">
        <div className="width49">
          <input
            placeholder="Name*"
            className="width100"
            name="name"
            value={message.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="width49">
          <input
            placeholder="Email*"
            className="width100"
            name="email"
            value={message.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="cInputs flex width100 spaceBtw">
        <div className="width49">
          <input
            placeholder="Phone*"
            className="width100"
            name="phone"
            value={message.phone}
            onChange={handleChange}
          />
        </div>
        <div className="width49">
          <input
            placeholder="Website If Any"
            className="width100"
            name="website"
            value={message.website}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="cInputs flex width100 spaceBtw">
        <div className="width49">
          <input
            placeholder="Country"
            className="width100"
            name="country"
            value={message.country}
            onChange={handleChange}
          />
        </div>
        <div className="width49">
          <input
            placeholder="Company"
            className="width100"
            name="company"
            value={message.company}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="cInputs flex width100">
        <div className="width100">
          <select
            className="width100"
            name="reason"
            value={message.reason}
            onChange={handleChange}
            required
          >
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
            name="message"
            value={message.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className=" flex width100">
        <div className="width100">
          {status === "success" ? (
            <p className="contactSent margin1 textCenter">
              Thank you for submitting your message. I will get back to you as
              soon as possible.
            </p>
          ) : (
            ""
          )}
          {status === "error" ? (
            <p className="contactError margin1 textCenter">
              Oops, there was an error submitting the form. Please try again
              later.
            </p>
          ) : (
            ""
          )}

          <button type="submit" className="width100">
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
