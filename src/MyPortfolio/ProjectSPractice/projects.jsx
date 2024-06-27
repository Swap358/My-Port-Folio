import React from "react";
import "./Experience.css";
import imglogo from "../../Assets/Home/exp1.png";
import expi from "../../Assets/Home/edu.png";
export const Experience = () => {
  return (
    <>
      <div className="project-sec d-flex" id="Experience">
       <div className="row">
       <div className="div-img col-4">
          <img src={imglogo} className="image-fluid" alt="" />
        </div>
        <div className="col exp">
       
          <div className="exp1">
            <span>
              <img
                src={expi}
                alt=""
                
                style={{ height: "35px", width: "35px" }}
              />
              <h5>Experience</h5>
              <p>6+ Month Web Developer -AlcaMedia Pvt Solution</p>
            </span>
          </div>
          <div className="exp1">
            <span>
              <img
                src={expi}
                alt=""
                style={{ height: "35px", width: "35px" }}
              />
              <h5>Experience</h5>
              <p>6+ Month Frontend Developer -SoftCrowd Technology</p>
            </span>
          </div>
          <div className="exp1">
            <img src={expi} alt="" style={{ height: "35px", width: "35px" }} />{" "}
            <br />
            <span>
              <h5>Education</h5>
              <p>Masters Degree in Computer Science  Nashik</p>
            </span>
          </div>
         
        </div>
       </div>
      </div>
    </>
  );
};
