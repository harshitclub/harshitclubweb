import React from "react";
import "./style.css";
import {
  DiAws,
  DiBootstrap,
  DiCss3,
  DiGithubBadge,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiNodejsSmall,
  DiReact,
  DiSass,
} from "react-icons/di";
import { RiCodeSSlashFill } from "react-icons/ri";

export default function Skills() {
  return (
    <section className="skillsContainer flex flexColumn maxWidth width90 alignStart">
      <h2>
        Programming Languages <RiCodeSSlashFill className="skillHeadIcon" />
      </h2>
      <div className="programmingSkills flex alignStart justifyCenter spaceBtw width100">
        <div className="width48">
          <h3>
            JavaScript <DiJavascript1 className="skillIcons" />
          </h3>
          <p>
            JavaScript is a widely used programming language that enables
            dynamic and interactive functionality on webpages. It runs on the
            client-side within web browsers and allows developers to manipulate
            webpage elements, handle user interactions, and dynamically update
            content without requiring page reloads.
          </p>
        </div>
        <div className="width48">
          <h3>TypeScript</h3>
          <p>
            TypeScript is a programming language that extends the capabilities
            of JavaScript by adding static typing. It allows developers to
            define variable types, enforce type safety, and catch potential
            errors during development. TypeScript code is then transpiled into
            JavaScript, ensuring compatibility with all JavaScript environments.
          </p>
        </div>
      </div>
      <div className="skillsDivider"></div>
      <h2>
        Frontend Skills <RiCodeSSlashFill className="skillHeadIcon" />
      </h2>
      <div className="frontendSkills flex alignStart justifyCenter spaceBtw width100">
        <div className="width48">
          <h3>
            HTML5 <DiHtml5 className="skillIcons" />
          </h3>
          <p>
            HTML (Hypertext Markup Language) is the backbone of the World Wide
            Web, enabling the creation and structuring of web pages.
          </p>
          <h3>
            React.js <DiReact className="skillIcons" />
          </h3>
          <p>
            ReactJS is a popular JavaScript library used for building user
            interfaces. It allows developers to create reusable UI components
            that can be efficiently rendered and updated in response to changes
            in data.
          </p>
          <h3>Next.js</h3>
          <p>
            Next.js is a popular JavaScript framework built on top of React. It
            provides a powerful and feature-rich environment for developing
            server-rendered and statically-generated React applications.
          </p>
        </div>
        <div className="width48">
          <h3>
            CSS3 <DiCss3 className="skillIcons" />
          </h3>
          <p>
            CSS (Cascading Style Sheets) is a powerful language used to enhance
            the appearance and layout of web pages.
          </p>
          <h3>
            SCSS <DiSass className="skillIcons" />
          </h3>
          <p>
            SCSS (Sassy CSS) is a preprocessor for CSS that extends the
            capabilities of traditional CSS syntax.
          </p>
          <h3>Material UI</h3>
          <p>
            Material-UI is a widely used and highly regarded React component
            library that implements the Material Design principles.
          </p>
          <h3>
            Bootstarp <DiBootstrap className="skillIcons" />
          </h3>
          <p>
            React-Bootstrap is a popular library that combines the power of
            React with the styling capabilities of Bootstrap, a widely used CSS
            framework.
          </p>
        </div>
      </div>
      <div className="skillsDivider"></div>
      <h2>
        Backend Skills <RiCodeSSlashFill className="skillHeadIcon" />
      </h2>
      <div className="backendSkills flex alignStart justifyCenter spaceBtw width100">
        <div className="width48">
          <h3>
            Node.js <DiNodejsSmall className="skillIcons" />
          </h3>
          <p>
            Node.js is a powerful JavaScript runtime built on Chrome's V8
            engine. It allows developers to run JavaScript on the server-side,
            enabling the development of scalable and efficient web applications.
          </p>
        </div>
        <div className="width48">
          <h3>Express.js</h3>
          <p>
            Express.js is a popular web application framework for Node.js. It
            provides a simple and minimalistic approach to building web servers
            and APIs.
          </p>
        </div>
      </div>
      <div className="skillsDivider"></div>
      <h2>
        Database Skills <RiCodeSSlashFill className="skillHeadIcon" />
      </h2>
      <div className="dbSkills flex alignStart justifyCenter spaceBtw width100">
        <div className="width48">
          <h3>
            MongoDB <DiMongodb className="skillIcons" />
          </h3>
          <p>
            MongoDB is a popular and flexible NoSQL database that stores data in
            a document-oriented format. It offers a schema-less approach,
            allowing developers to store and retrieve data without the need for
            predefined schemas or tables.
          </p>
        </div>
        <div className="width48">
          <h3>
            MySQL <DiMysql className="skillIcons" />
          </h3>
          <p>
            MySQL is a widely used open-source relational database management
            system. It offers a robust and reliable solution for storing and
            managing structured data.
          </p>
        </div>
      </div>
      <div className="skillsDivider"></div>
      <h2>
        Testing <RiCodeSSlashFill className="skillHeadIcon" />
      </h2>
      <div className="testingSkills flex alignStart justifyCenter spaceBtw width100">
        <div className="width48">
          <h3>Postman</h3>
          <p>
            Postman is a popular collaboration platform and API development tool
            used by developers to simplify the process of testing and
            documenting APIs.
          </p>
        </div>
        <div className="width48">
          <h3>Insomnia</h3>
          <p>
            Insomnia is a powerful cross-platform API testing tool that helps
            developers streamline the process of testing and debugging APIs.
          </p>
        </div>
      </div>
      <div className="skillsDivider"></div>
      <h2>
        Deployment <RiCodeSSlashFill className="skillHeadIcon" />
      </h2>
      <div className="deploymentSkills flex alignStart justifyCenter spaceBtw width100">
        <div className="width48">
          <h3>
            AWS <DiAws className="skillIcons" />
          </h3>
          <p>
            AWS (Amazon Web Services) is a comprehensive cloud computing
            platform offered by Amazon. It provides a wide range of services and
            tools to help individuals and businesses build, deploy, and manage
            their applications and infrastructure in the cloud.
          </p>
          <h3>Vercel</h3>
          <p>
            Vercel is a cloud-based hosting platform that specializes in static
            site hosting and serverless functions. It offers a seamless and
            efficient way to deploy and scale websites and web applications.
          </p>
          <h3>cPanel</h3>
          <p>
            cPanel is a web-based control panel that simplifies the management
            of web hosting services. It provides a graphical interface that
            allows users to easily manage various aspects of their hosting
            accounts, including website files, email accounts, databases,
            domains, and more.
          </p>
        </div>
        <div className="width48">
          <h3>
            Github <DiGithubBadge className="skillIcons" />
          </h3>
          <p>
            GitHub is a web-based platform that allows developers to collaborate
            on projects and manage version control for their code. It provides a
            centralized repository where developers can store, share, and track
            changes to their codebase.
          </p>
          <h3>Netlify</h3>
          <p>
            Netlify is a cloud-based hosting platform that simplifies the
            process of deploying and managing static websites and web
            applications. It provides an intuitive and user-friendly interface
            for seamless deployment, continuous integration, and automated build
            processes.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
