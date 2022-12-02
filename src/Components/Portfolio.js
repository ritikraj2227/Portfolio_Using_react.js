import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <>
      <section id="my-work">
        <div className="portfolio">
          <div className="portfolio-heading">
            <h1>Portfolio</h1>
          </div>

          <div className="portfolio-content container">
            <div className="project-1">
              <img src="claculator_dark.png" alt="" />
              <div className="project-1-details">
                <i className="fab fa-html5"></i>
                <i className="fab fa-css3"></i>
                <i className="fab fa-js"></i>
                <h2>project-1</h2>
                <p>Calculator made using Html,Css and JavaScript.</p>

                <a
                  className="btn"
                  href="https://ritikraj2227.github.io/Calculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  try it
                </a>

                <a
                  className="btn"
                  href="https://github.com/ritikraj2227/Calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Code
                </a>
              </div>
            </div>

            <div className="project-1">
              <img src="bmi_calculator.png" alt="" />
              <div className="project-1-details">
                <i className="fab fa-html5"></i>
                <i className="fab fa-css3"></i>
                <i className="fab fa-js"></i>
                <h2>project-2</h2>
                <p>BMICalculator made using Html,Css and JavaScript.</p>

                <a
                  className="btn"
                  href="https://ritikraj2227.github.io/BMICalculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  try it
                </a>

                <a
                  className="btn"
                  href="https://github.com/ritikraj2227/BMICalculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Code
                </a>
              </div>
            </div>

            <div className="project-1">
              <img src="tip_calculator.png" alt="" />
              <div className="project-1-details">
                <i className="fab fa-bootstrap"></i>
                <h2>project-2</h2>
                <p>TIPCalculator Using Bootstrap. </p>

                <a
                  className="btn"
                  href="https://ritikraj2227.github.io/TIPCalculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  try it
                </a>

                <a
                  className="btn"
                  href="https://github.com/ritikraj2227/TIPCalculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Code
                </a>
              </div>
            </div>
          </div>


            <Link to="/contact" className="contact-msg">
              Contact Me <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>

        </div>
      </section>
    </>
  );
}
