import Link from "next/link";
import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

const PageNotFound = () => {
  return (
    <main className="errorPage flex flexColumn width100">
      <section className="errorPageContainer flex flexColumn maxWidth width90">
        <h1>404 | Page Not Found</h1>
        <RiErrorWarningLine className="errorIcon" />
        <div className="errorBtns flex">
          <div className="errorBtn flex">
            <Link href="/">Home</Link>
          </div>
          <div className="errorBtn flex">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
