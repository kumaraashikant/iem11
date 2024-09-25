// components/Research.js
import React from "react";
import "./Research.css";

function Research1() {
  return (
    <section className="research" id="research">
      <div className="container">
        <h2>Research</h2>
        <p>We conduct groundbreaking research in various AI domains.</p>
        <div className="research-cards">
          <div className="card">
            <h3>Deep Learning</h3>
            <p>
              Developing advanced algorithms for image recognition, natural
              language processing, and more.
            </p>
          </div>
          <div className="card">
            <h3>Genetic Algorithm</h3>
            <p>
              Research on genetic algorithms focuses on optimizing AI models and
              solving complex real-world problems efficiently.
            </p>
          </div>
          <div className="card">
            <h3>Computer Vision</h3>
            <p>
              Improving the ability of computers to understand and interpret
              visual information.
            </p>
          </div>
          <div className="card">
            <h3>Machine Learning</h3>
            <p>
              Designing algorithms that enable computers to learn from data and
              improve performance over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research1;
