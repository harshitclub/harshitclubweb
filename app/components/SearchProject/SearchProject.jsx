"use client";

import React from "react";

function SearchProject() {
  return (
    <section className="searchProject">
      <select className="searchProjectSelect">
        <option>Select Technology</option>
        <option>Next.js</option>
        <option>Web 3</option>
        <option>React.js</option>
        <option>Node.js</option>
        <option>MERN Stack</option>
        <option>HTML & CSS</option>
        <option>Firebass</option>
      </select>
    </section>
  );
}

export default SearchProject;
