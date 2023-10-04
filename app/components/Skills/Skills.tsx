import React from "react";
import "./style.css";

export default function Skills() {
  return (
    <section className="skillsSection flex flexColumn width100">
      <div className="skillSectionContainer flex flexColumn alignStart maxWidth width90">
        <h2>My Areas of Expertise</h2>
        <div className="skillSBoxes width100 flex spaceBtw">
          <div className="skillSBox flex flexColumn alignStart js">
            <h3>JavaScript</h3>
          </div>

          <div className="skillSBox flex flexColumn alignStart react">
            <h3>React.js</h3>
          </div>
          <div className="skillSBox flex flexColumn alignStart next">
            <h3>Next.js</h3>
          </div>

          <div className="skillSBox flex flexColumn alignStart node">
            <h3>Node.js</h3>
          </div>
          <div className="skillSBox flex flexColumn alignStart express">
            <h3>Express.js</h3>
          </div>
        </div>
        <div className="skillSBoxes width100 flex spaceBtw">
          <div className="skillSBox flex flexColumn alignStart mongo">
            <h3>MongoDB</h3>
          </div>
          <div className="skillSBox flex flexColumn alignStart html">
            <h3>HTML5</h3>
          </div>

          <div className="skillSBox flex flexColumn alignStart css">
            <h3>CSS3</h3>
          </div>
          <div className="skillSBox flex flexColumn alignStart scss">
            <h3>SCSS</h3>
          </div>
          <div className="skillSBox flex flexColumn alignStart git">
            <h3>Git & Github</h3>
          </div>
        </div>
        <h3 className="otherSkillsHeading">Other Skills</h3>
        <div className="skillSBoxes width100 flex spaceBtw noMargin">
          <div className="skillSBox flex flexColumn alignStart material">
            <h3>Material UI</h3>
          </div>
          <div className="skillSBox flex flexColumn alignStart bootstrap">
            <h3>Bootstrap</h3>
          </div>
          <div className="skillSBox flex flexColumn alignStart firebase">
            <h3>Firebase</h3>
          </div>

          <div className="skillSBox flex flexColumn alignStart seo">
            <h3>On-Page SEO</h3>
          </div>
          <div className="skillSBox flex flexColumn alignStart wordpress">
            <h3>WordPress</h3>
          </div>
        </div>

        <div className="mobileSkillBoxes flex ">
          <div className="mSkillBox">
            <h3>JavaScript</h3>
          </div>
          <div className="mSkillBox">
            <h3>React.js</h3>
          </div>
          <div className="mSkillBox">
            <h3>Next.js</h3>
          </div>
          <div className="mSkillBox">
            <h3>Node.js</h3>
          </div>
          <div className="mSkillBox">
            <h3>Express.js</h3>
          </div>
          <div className="mSkillBox">
            <h3>MongoDB</h3>
          </div>
          <div className="mSkillBox">
            <h3>HTML5</h3>
          </div>
          <div className="mSkillBox">
            <h3>CSS3</h3>
          </div>
          <div className="mSkillBox">
            <h3>SCSS</h3>
          </div>
          <div className="mSkillBox">
            <h3>Git & Github</h3>
          </div>
        </div>
        <h3 className="mOtherSkillsHeading">Other Skills</h3>
        <div className="mobileSkillBoxes flex ">
          <div className="mSkillBox">
            <h3>Material UI</h3>
          </div>
          <div className="mSkillBox">
            <h3>Bootstrap</h3>
          </div>
          <div className="mSkillBox">
            <h3>Firebase</h3>
          </div>
          <div className="mSkillBox">
            <h3>On-Page SEO</h3>
          </div>
          <div className="mSkillBox">
            <h3>WordPress</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
