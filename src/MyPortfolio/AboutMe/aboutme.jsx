import React from "react";
import "./aboutme.css";
import "../Home/Profile/profile.css";
import myImage from "../../Assets/Home/pimage.jpg";

export const AboutMe = React.forwardRef ((props,ref) => {
  return (
    <div className="about-me-container" id="aboutme" ref={ref}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h2 className="about-me-heading">Know about Me</h2>
            <div className="about-me-text">
              <p>
                Full Stack Web and Mobile Developer with background knowledge
                of JAVA fullStack,MERN Stack with redux ,along with a knack of
                building application / websites with efficiency . Strong
                proffesional with a MSC willing to be an asset for an
                organization.
              </p>
              <h6>Here Some Highlights :</h6>
              <ul>
                <li>Full Stack web development</li>
                <li>Develope Interactive front end as per the design</li>
                <li>ReactJS</li>
                <li>Redux for State Management</li>
                <li>Building REST API</li>
                <li>Managing Database with SQL, NoSQL</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-me-image">
              <img src={myImage} alt="" className="img-fluid" />
            </div>
            <div className="d-flex p-4 justify-content-center">
            <button className="bttn primary-bttn">Hire Me</button>
              <a
                href="https://drive.google.com/file/d/1o5Lase7TnS1NEdufSIOGIfr85Uumu5zK/view?usp=sharing"
                // href="SwapnilASansareCV.pdf"
                // download="SwapnilASansareCV.pdf"
                target="blank"
              >
                <button className="bttn highlighted-bttn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
