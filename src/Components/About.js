import React from 'react'
import { Link } from "react-router-dom";

export default function About() {

  const clickDownload = () => {
    fetch('resume.pdf').then(response => {
      response.blob().then(blob =>{
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'resume.pdf';
        alink.click();
      })
    })
  }
  return (

    <>
    <div id="about-me" className="about">
      <div className="container">
        <div className="about-content">
          <div className="left-content">
            <div className="about-heading">
              <h1>About Me</h1>
            </div>
            <img src="avatar.png" alt="" />
            <p>
              I am 20 year old Website Developer and a BE student. I enjoy
              buiding new things and realy enjoy solving problem. I am always
              eager to learn and explore new things, The More The merrier.
            </p>
            <p>
              <Link to="/portfolio">
                Check out my work <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </p>
             <p>
             <Link onClick={clickDownload}>
                Download My Resume <i className="fa fa-arrow-down" aria-hidden="true"></i>
              </Link>
             </p>
          </div>

          <div className="right-content">
            <div>
              <h1 className="skill-heading">My Skills</h1>
            </div>
            <div className="progress">
              <div className="progress-bar">
                <div className="progress-text">
                  <span>HTML</span>
                  
                </div>

                <div className="progress-line">
                  <span className="html"></span>
                </div>
              </div>

              <div className="progress-bar">
                <div className="progress-text">
                  <span>CSS</span>
                  
                </div>
                <div className="progress-line">
                  <span className="css"></span>
                </div>
              </div>

              <div className="progress-bar">
                <div className="progress-text">
                  <span>BOOTSTRAP</span>
                  
                </div>
                <div className="progress-line">
                  <span className="bootstrap"></span>
                </div>
              </div>

              <div className="progress-bar">
                <div className="progress-text">
                  <span>JAVASCRIPT</span>
                  
                </div>
                <div className="progress-line">
                  <span className="js"></span>
                </div>
              </div>

              <div className="progress-bar">
                <div className="progress-text">
                  <span>React JS</span>
                  
                </div>
                <div className="progress-line">
                  <span className="react"></span>
                </div>
              </div>

              <div className="progress-bar">
                <div className="progress-text">
                  <span>PHP</span>
                  
                </div>
                <div className="progress-line">
                  <span className="php"></span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
}
