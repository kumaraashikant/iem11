import React from "react";
import "./Vision.css"; // Specific CSS for Vision section
import Research1 from "./Research1";
import Faculty1 from "./Faculty1";
function Vision() {
  return (
    <section className="vision" id="vision">
      <div className="container">
        <h2>Our Vision</h2>
        <p>
          To leverage cutting-edge AI to address global challenges and create a
          positive impact.
        </p>
        <div className="vision-cards">
          <div className="card">
            <h3>Innovation</h3>
            <p>We drive to push the boundaries of research and development.</p>
          </div>
          <div className="card">
            <h3>Impact</h3>
            <p>
              Our goal is to use AI to create meaningful solutions for societal
              issues.
            </p>
          </div>
          <div className="card">
            <h3>Collaboration</h3>
            <p>
              We foster partnerships with leading institutions and organizations
              to amplify our reach.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Research1></Research1>
      </div>
      <div>
        <Faculty1></Faculty1>
      </div>
    </section>
  );
}

export default Vision;
