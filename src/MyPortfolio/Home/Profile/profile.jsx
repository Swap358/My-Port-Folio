import React from "react";
import "./profile.css";
import Typical from "react-typical";
import { Footer } from "../Footer/footer";
export const Profile =React.forwardRef((props,ref) => {
  return (
   <>
     <div className="profile-container" id="profile" ref={ref}>
      <div className="profile-parent ">
        <div className="profile-details ">
          <div className="cloz">
            <div className="cloz-icon">
              <a href="/facebook">
              <i className="fab fa-facebook-square"></i>
              </a>
              <a href="/gogle">
                <i className="fab fa-google-plus-square"></i>
              </a>
              <a href="instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/youtue">
                <i className="fab fa-youtube-square"></i>
              </a>
              <a href="/twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'am <span className="highlighted-text">Swapnil...</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  
                  steps={[
                    "Crazy.. Dev 🟣",
                    3000,
                    "Full Stack Developer 💻",
                    3000,
                    "MERN Stack Developer 😎",
                    3000,
                    "ReactJS Developer ⚡",
                    3000,
                    "JAVA Developer 🕶",
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                knack of building application with frontend and backend
                operation.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="bttn primary-bttn " > Hier Me </button>
            {"      "}
            
            <a href="https://drive.google.com/file/d/1o5Lase7TnS1NEdufSIOGIfr85Uumu5zK/view?usp=sharing" target="blanck">
              <button className="bttn highlighted-bttn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture right-animation ">
          <div className="profile-picture-background"></div>
        </div>
      </div>
     
    </div><Footer/>
   </>
  );
});
