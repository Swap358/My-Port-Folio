import React from "react";
import "./myproject.css";
import proj1 from "./../../Assets/Home/project1.png";
import proj2 from './../../Assets/Home/project2.png'

export const MyProjects = React.forwardRef ((props,ref) => {
  return (
    <div className="myproject-sec" id="projects" ref={ref}>
      <h6 style={{ fontSize: "18px" }}>My Recent</h6>
      <h3 className="about-me-heading">Project Work...</h3>
      <div className="row m-0">
        <div className="project-details">
          <p>
            Welcome to my portfolio showcase, where I present tangible
            manifestations of my expertise. Each project is accompanied by
            succinct descriptions and direct access to code repositories and live
            demos. These exhibits serve as a testament to my exceptional
            problem-solving abilities, proficiency in adapting to diverse
            technologies, and proficient project management skills.
          </p>
        </div>
        <div className="col-sm-6 left-pro-1">
          <div className="project-card">
            <div className="proj-body">
              <img src={proj1} alt="Project 1" className="project-img" />
              <h2 className="experience-sub-title project-title">
                Swapnil | My Portfolio
              </h2>
              <div className="btn-container">
                <button className="btn project-btn">Github</button>
                <button className="btn project-btn">Live Demo</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 left-pro-1">
          <div className="project-card">
            <div className="proj-body">
              <img src={proj2} alt="Project 1" className="project-img" />
              <h2 className="experience-sub-title project-title">
                Project M-System
              </h2>
              <div className="btn-container">
                <button className="btn project-btn">Github</button>
                <button className="btn project-btn">Live Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
