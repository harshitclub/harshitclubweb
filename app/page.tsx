import "./style.css";

import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Social from "./components/Social/Social";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Github from "./components/Github/page";
import Experience from "./components/Experience/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <About />
      <Projects />
      {/* <Experience /> */}
      <Social />
      <Github />
      <Contact />
    </main>
  );
}
