"use client";
import React, { useEffect, useState } from "react";
import "./style.css";

function page() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      const response = await fetch("/api/messages");
      const { messages } = await response.json();
      setMessages(messages);
    }

    fetchMessages();
  }, []);

  return (
    <>
      <main className="messages flex flexColumn width100">
        <section className="messagesHeader flex width100">
          <h1>My Messages</h1>
        </section>
        <section className="messagesContainer width90 maxWidth">
          {messages?.map((message) => {
            return (
              <>
                <table className="width100 margin1">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{message.name}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{message.email}</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>{message.phone}</td>
                    </tr>
                    <tr>
                      <td>Website</td>
                      <td>{message.website}</td>
                    </tr>
                    <tr>
                      <td>Country</td>
                      <td>{message.country}</td>
                    </tr>
                    <tr>
                      <td>Reason</td>
                      <td>{message.reason}</td>
                    </tr>
                    <tr>
                      <td>Message</td>
                      <td>{message.message}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default page;
