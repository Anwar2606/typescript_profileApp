import React from "react";
import "./skill.css";
import Navbar from "../Navbar/Navbar";
export default function Skill() {
  return (
    <div  style={{backgroundColor:"black",height:"50.2rem"}}>
      <div >
        <Navbar />
      </div>
        <div className="container">
          <br />
          <div className="main-title">
            <h1>My Skills</h1>
            <p>
              I hereby, declare that the percentages furnished is true to the
              best of my knowledge.
            </p>
          </div>

          <center>
            <div className="row">
              <div className="col">
                <div className="sub-title">
                  <h2>Programming Skills</h2>
                </div>

                <div className="skills-container">
                  <div className="skill">
                    <div className="subject">HTML</div>
                    <div className="progress-bar" data-percent="80%">
                      <div
                        className="progress-line"
                        style={{ maxWidth: "94%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="skill">
                    <div className="subject">CSS</div>
                    <div className="progress-bar" data-percent="83%">
                      <div
                        className="progress-line"
                        style={{ maxWidth: "83%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="skill">
                    <div className="subject">JavaScript</div>
                    <div className="progress-bar" data-percent="88%">
                      <div
                        className="progress-line"
                        style={{ maxWidth: "88%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="skill">
                    <div className="subject">React js</div>
                    <div className="progress-bar" data-percent="68%">
                      <div
                        className="progress-line"
                        style={{ maxWidth: "68%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="col">
                <div className="sub-title">
                  <h2>Designing Skills</h2>
                </div>

                <div className="skills-container">
                  <div className="skill">
                    <div className="subject">Photoshop</div>
                    <div className="progress-bar" data-percent="82%">
                      <div
                        className="progress-line"
                        style={{ maxWidth: "82%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="skill">
                    <div className="subject">Corel draw</div>
                    <div className="progress-bar" data-percent="74%">
                      <div
                        className="progress-line"
                        style={{ maxWidth: "14%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="skill">
                    <div className="subject">Afetr Effects</div>
                    <div className="progress-bar" data-percent="63%">
                      <div
                        className="progress-line"
                        style={{ maxWidth: "10%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="skill">
                    <div className="subject">Adobe Flash</div>
                    <div className="progress-bar" data-percent="91%">
                      <div
                        className="progress-line"
                        style={{ maxWidth: "91%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </center>
        </div>
      </div>
    
  );
}
