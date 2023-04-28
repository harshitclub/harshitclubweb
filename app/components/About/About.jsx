import React from "react";
import "./style.css";
import Link from "next/link";

export default function About() {
  return (
    <section className="aboutSection with100 flex flexColumn">
      <div className="aboutSContainer flex flexColumn alignStart maxWidth width90">
        <h2 className="font600">Get to Know Me</h2>
        <p className="margin1 textJustify">
          Hi, I'm Harshit Kumar, a web developer who specializes in creating
          dynamic and responsive websites and web applications. I use the latest
          technologies such as React.js, Next.js, Node.js, and more to build
          websites that are not only visually appealing but also high-performing
          and scalable.
        </p>
        <p className="margin1 textJustify">
          In addition to my technical skills, I also understand the importance
          of on-page SEO in driving relevant traffic to a website. By optimizing
          the content and HTML source code of each page, I ensure that the
          websites I create rank higher on search engines, improving user
          engagement and overall performance.
        </p>
        <p className="marginMore textJustify">
          I'm passionate about creating meaningful digital experiences that help
          businesses and individuals achieve their goals. Let's work together to
          bring your ideas to life and make a difference on the web!
        </p>
        <div className="aboutSBtns flex">
          <div className="aboutSbtn">
            <Link href="/about">
              <button>Know More</button>
            </Link>
          </div>
          <div className="aboutSbtn">
            <Link href="/contact">
              <button>Contact</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="borderBottom"></div>
    </section>
  );
}
