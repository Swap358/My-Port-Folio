import React, { useState } from "react";
import "./resume.css"; // CSS file for resume component
import { FaGraduationCap } from "react-icons/fa"; // Importing icons from react-icons library
import { BsPersonWorkspace } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { AiTwotoneLike } from "react-icons/ai";

export const Resume = React.forwardRef ((props,ref)=> {
  const [selectedNavItem, setSelectedNavItem] = useState("education");

  const handleNavItemSelect = (item) => {
    setSelectedNavItem(item);
  };

  return (
    <div className="resume-container" id="resume" ref={ref}>
      <div className="container res-container">
        <div className="row">
          <div className="text-center">
            <span>
              {" "}
              <h2 className="about-me-heading">Resume...</h2>
            </span>
          </div>
          {/* Side Navigation */}
          <div className="col-lg-3 ">
            <div className="side-nav">
              <ul>
                <li
                  className={selectedNavItem === "education" ? "active" : ""}
                  onClick={() => handleNavItemSelect("education")}
                >

                  <FaGraduationCap />{" "}
                  <span className="text-li">
                    <h5 className="d-inline">Education</h5>
                  </span>
                </li>

                <li
                  className={selectedNavItem === "workhistory" ? "active" : ""}
                  onClick={() => handleNavItemSelect("workhistory")}
                >
                  <BsPersonWorkspace/>
                  {" "}
                  <span className="text-li">
                    <h5 className="d-inline">Work History</h5>
                  </span>
                </li>
                <li
                  className={selectedNavItem === "skills" ? "active" : ""}
                  onClick={() => handleNavItemSelect("skills")}
                >
                 
              <GiSkills />{" "}
                  <span className="text-li">
                    <h5 className="d-inline">Programming Skils</h5>
                  </span>
                </li>

                <li
                  className={selectedNavItem === "projects" ? "active" : ""}
                  onClick={() => handleNavItemSelect("projects")}
                >
                  <GoProjectSymlink />{" "}
                  <span className="text-li">
                    <h5 className="d-inline">Project's</h5>
                  </span>
                </li>
                <li
                  className={selectedNavItem === "intrests" ? "active" : ""}
                  onClick={() => handleNavItemSelect("intrests")}
                >
                  <AiTwotoneLike />{" "}
                  <span className="text-li">
                    <h5 className="d-inline"> Intrests</h5>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Content */}
          <div className="col-lg-9">
            {selectedNavItem === "education" && (
              <div className="resume-content">
                <Education />
              </div>
            )}
            {selectedNavItem === "workhistory" && (
              <div className="resume-content">
                <WorkHistory />
              </div>
            )}
            {selectedNavItem === "skills" && (
              <div className="resume-content">
                <Skills />
              </div>
            )}
            {selectedNavItem === "projects" && (
              <div className="resume-content">
                <Projects />
              </div>
            )}
            {selectedNavItem === "intrests" && (
              <div className="resume-content">
                <Intrest />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

const Education = () => {
  return (
    <div>
      <div className="heading" id="Resume">
        <div className="head-li">
          <h5>
            {" "}
            <span>🟣</span> PCMCS College ,Nashik
          </h5>
          <h5 className="rounded-5 float-right">2020</h5>
          {/* <span className="btn-danger rounded-5 float-right">2020</span> */}
          <p>Msc ComputerScience with Second Class ..</p>
        </div>
      </div>
      <div className="heading ">
        <div className="head-li">
          <h5>
            <span>🟣</span> KTHM College Of Nashik
          </h5>
          <h5 className="rounded-5 float-right">2018</h5>
          <p>BSc ComputerScience with Second Class ..</p>
        </div>
      </div>
      <div className="heading ">
        <div className="head-li">
          <h5>
            <span>🟣</span>
            M. R. M. School ,Manmad
          </h5>
          <h5 className="rounded-5 float-right">2014</h5>
          <p>HSC Science </p>
        </div>
      </div>
    </div>
  );
};

const WorkHistory = () => {
  return (
    <>
      <div className="heading">
        <div className="head-li">
          <h5>
            {" "}
            <span>🟣</span> Alca Media Pvt.Ltd.
          </h5>
          <h5 className="rounded-5 float-right">2020</h5>
          <p>
            <b>Web Developer Trainee(internship)</b>
          </p>
        </div>

        <p>
         I was Done an 6 month Internship in Alcamedia Pvt.Ltd. I am also learn there right way to work with an organaization and 
         I get there best staff and employees. There I was work as Trainee web developer there I am responsible for develope and designs 
         web pages as per requirement and update new changes on existing projets. {" "}
        </p>
      </div>
    </>
  );
};

const Intrest = () => {
  return (
    <div>
      <div className="heading">
        <div className="head-li">
          <h5>
            {" "}
            <span>🟣</span> Music
          </h5>
          
          <p>Listening to
             music is something can never compromise with skimming through sporify's,YT Music pop song,marathi song charts at ties the best stress reliver that i can get my hands on.</p>
        </div>
      </div>

      <div className="heading">
        <div className="head-li">
          <h5>
            {" "}
            <span>🟣</span> Coding 
          </h5>
          <p>The Coding is my passion and coding .</p>
        </div>
      </div>
    </div>
    );
};

const Projects = () => {
  return (
    <div className="project">
      <div className="heading">
      <div className="heading">
        <div className="head-li">
          <h5>
            {" "}
            <span>🟣</span> Project Managment Application
          </h5>
          {/* <button className="btn btn-danger rounded-5 float-right">
            2020-2021
          </button> */}
          <p>
           Front-End Technologies used : Html/CSS ,Reactjs, JavaScripts <br />
           Back-End/API :Java, Springboot, Mysql. <br /> 
            It is an User freindly WebApplication Which is manage an project Details for an institure 
            it's also manage efficiently all details of trainers , projects and all working it include all functionality.{" "}
          </p>
        </div>
        
      </div>
        <div className="head-li">
          <h5>
            {" "}
            <span>🟣</span> Online MovieTickets Bokking
          </h5>
          {/* <button className="btn btn-danger rounded-5 float-right">
            2020-2021
          </button> */}
          <p>
            Technologies used : Html/CSS , JavaScripts ,PHP ,MySQL <br />
          It was an User freindly Webapplication for booking online movie
          tickets.{" "}
        </p>
        </div>

       
      </div>

      <div className="heading">
        <div className="head-li">
          <h5>
            {" "}
            <span>🟣</span> My PortFolio
          </h5>

          <p>
            Technologies used : ReactJS, Html/CSS , JavaScripts <br />
           
          It is an User freindly WebApplication Which is shows my skills , profile and Services .{" "}
        
          </p>
        </div>

       
      </div>
     
      {/* <div className="heading">
        <div className="head-li">
          <h5>
            {" "}
            <span>🟣</span> Online MovieTickets Bokking
          </h5>
          <button className="btn btn-danger rounded-5 float-right">
            2020-2021
          </button>
          <p>
            <b>Technologies used : Html/CSS , JavaScripts ,PHP ,MySQL</b>
          </p>
        </div>

        <p>
          It was an User freindly Webapplication for booking online movie
          tickets.{" "}
        </p>
      </div> */}
    </div>
  );
};

const Skills = () => {
  return (
   
      <div className="main-skill">
        <div className="skill-bar">
            <div className="info">
              <p>java</p>
              <p className="percent">80% </p>
            </div>
            <div className="bar">
              <span className="java"></span>
            </div>
        </div>

        <div className="skill-bar">
            <div className="info">
              <p>html</p>
              <p  className="percent">90% </p>
            </div>
            <div className="bar">
              <span className="html"></span>
            </div>
        </div>

        <div className="skill-bar">
            <div className="info">
              <p>CSS</p>
              <p  className="percent">80% </p>
            </div>
            <div className="bar">
              <span className="css"></span>
            </div>
        </div>

        <div className="skill-bar">
            <div className="info">
              <p>ReactJS</p>
              <p  className="percent">70% </p>
            </div>
            <div className="bar">
              <span className="reactjs"></span>
            </div>
        </div>
        <div className="skill-bar">
            <div className="info">
              <p>MySQL</p>
              <p  className="percent">80% </p>
            </div>
            <div className="bar">
              <span className="mysql"></span>
            </div>
        </div>
        <div className="skill-bar">
            <div className="info">
              <p>NoSQL</p>
              <p  className="percent">60% </p>
            </div>
            <div className="bar">
              <span className="html"></span>
            </div>
        </div>
        <div className="skill-bar">
            <div className="info">
              <p>Bootsrap</p>
              <p  className="percent">70% </p>
            </div>
            <div className="bar">
              <span className="boot"></span>
            </div>
        </div>
        <div className="skill-bar">
            <div className="info">
              <p>SpringBoot</p>
              <p  className="percent">70% </p>
            </div>
            <div className="bar">
              <span className="boot"></span>
            </div>
        </div>


      </div>
  
  );
};
