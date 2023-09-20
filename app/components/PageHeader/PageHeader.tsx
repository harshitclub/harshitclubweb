import React from "react";
import "./style.css";

function PageHeader({ heading }: any) {
  return (
    <section className="pageHeader width90 maxWidth flex justifyCenter alignCenter">
      <h1>{heading}</h1>
    </section>
  );
}

export default PageHeader;
