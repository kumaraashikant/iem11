// components/Partnerships.js
import React from "react";
import "./Partnerships.css";

function Partnerships1() {
  return (
    <section className="partnerships" id="partnerships">
      <div className="container">
        <h2>Our Partnerships</h2>
        <p>
          We believe in the power of collaboration and have formed strategic
          partnerships with leading organizations.
        </p>

        <div className="partnership-categories">
          <div className="category">
            <h3>Industry Partners</h3>
            <p>
              Working with leading technology companies to translate research
              into practical applications.
            </p>
          </div>
          <div className="category">
            <h3>Academic Institutions</h3>
            <p>
              Collaborating with universities worldwide to foster knowledge
              exchange and talent development.
            </p>
          </div>
          <div className="category">
            <h3>Government Agencies</h3>
            <p>
              Partnering with government organizations to address societal
              challenges using AI.
            </p>
          </div>
          <div className="category">
            <h3>Non-Profit Organizations</h3>
            <p>
              Supporting non-profit organizations to leverage AI for social
              good.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partnerships1;
