import React, { useEffect, useRef } from "react";
import "./Navbar/navbar.css";
import { Profile } from "./Profile/profile";
// import { Footer } from './Footer/footer';
import logo from "../../Assets/Home/portlogo.png";
import "./home.css";
import { AboutMe } from "../AboutMe/aboutme";
import { Resume } from "../Resume/resume";
// import { TestiMonial } from '../Testimonial/testimonial';
import { Experience } from "../ProjectSPractice/projects";
import { Contact } from "../ContactMe/contact";
import "../Home/Navbar/navbar.css";
import { ScrollToTop } from "./ScrollTop/scrolltotop";

import { TestM } from "../Testimonial/test";
import { MyProjects } from "../MyPrpjects/myprojects";
import { SideIcon } from "./Navbar/SideIcon/sideicon";

export const Home = () => {
  const profileRef = useRef(null);
  const AboutmeRef = useRef(null);
  // const projectRef=useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);
  const testimonialRef = useRef(null);
  const projectsRef =useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  // for nav bar toggler....??//

  useEffect(() => {
    const toggleBtn = document.querySelector(".toggle-btn");
    const toggleBtnIcon = document.querySelector(".toggle-btn i");
    const dropDownMenu = document.querySelector(".drop-down");

    if (toggleBtn && toggleBtnIcon && dropDownMenu) {
      toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle("open");
        const isOpen = dropDownMenu.classList.contains("open");
        toggleBtnIcon.className = isOpen ? "fa fa-xmark" : "fa fa-bars";

        // console.log(isOpen)
      };
    }
  }, []);

  return (
    <div className="home-container">
      <header>
        <div className="navbar">
          <div className="nav-logo">
            <a href="/home" style={{textDecoration:"none",fontFamily:"fantasy"}}>
              <img src={logo} alt="" />
            </a>

            {/* <div class="logo-container">
              <h1 class="logo-text">
                My<span class="highlight">Port</span>Folio
              </h1>
            </div> */}
          </div>

          <ul className="nav-list">
            <li
              className="nav-item"
              onClick={() => scrollToSection(profileRef)}
            >
              <a href="#profile" className="nav-link">
                Profile
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => scrollToSection(AboutmeRef)}
            >
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item" onClick={() => scrollToSection(resumeRef)}>
              <a href="#resume" className="nav-link">
                Resume
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => scrollToSection(testimonialRef)}
            >
              <a href="#testimonial" className="nav-link">
                Testimonial
              </a>
            </li>

            <li
              className="nav-item"
              onClick={() => scrollToSection(projectsRef)}
            >
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>

            <li
              className="nav-item"
              onClick={() => scrollToSection(contactRef)}
            >
              <a href="#contact" className="nav-link">
                Contact Me
              </a>
            </li>
          </ul>
          <div className="toggle-btn">
            <i className="fa fa-bars"></i>
          </div>
        </div>

        <div className="drop-down">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#profile" className="nav-link">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonial" className="nav-link">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact Me
              </a>
            </li>
          </ul>
          <li>
            <a href="getStarted" className="action-btn">
              Contact Me
            </a>
          </li>
        </div>
      </header>
      <Profile id="profile" ref={profileRef} />
      {/* <Footer /> */}
      <AboutMe id="aboutme" ref={AboutmeRef} />
      <Experience />
      <Resume id="resume" ref={resumeRef} />
      {/* <SkillSet/> */}
      <MyProjects id= "projects" ref={projectsRef} />

      <TestM id="testimonial" ref={testimonialRef} />
     
      <Contact id="contact" ref={contactRef} />
      <SideIcon />
      <ScrollToTop />
    </div>
  );
};
