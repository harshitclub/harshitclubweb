import "./style.css";

import About from "./components/Home/About/About";
import Hero from "./components/Home/Hero/Hero";
import Social from "./components/Home/Social/Social";
import Contact from "./components/Home/Contact/Contact";
import Projects from "./components/Home/Projects/Projects";
import Skills from "./components/Home/Skills/Skills";
import Github from "./components/Home/Github/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Github />
      <Social />
      <Contact />
    </main>
  );
}
