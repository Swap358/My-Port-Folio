import React, { useEffect, } from "react";
import "./navbar.css";
import logo from "../../../Assets/Home/logo3.png";
export const Navbar = () => {


  useEffect(() => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const toggleBtnIcon = document.querySelector('.toggle-btn i');
    const dropDownMenu = document.querySelector('.drop-down');

    if (toggleBtn && toggleBtnIcon && dropDownMenu) {
      toggleBtn.onclick = function() {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
        toggleBtnIcon.className = isOpen ? 'fa fa-xmark' : 'fa fa-bars';

        console.log(isOpen)
      };
    }
  }, []);




  return (
    <header>
      <div className="navbar">
        <div className="nav-logo">
            <a href="/home">
              
              <img src={logo} alt="" />
            </a>
            {/* <span>SwapnilS...</span> */}
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link"> Home </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link" >Resume</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Testimonial </a>
          </li>
          <li className="nav-item">
            <a href="/"  className="nav-link">Contact Me</a>
          </li>
        </ul>
        <div className="toggle-btn">
          <i className="fa fa-bars"></i>
        </div>
       
      </div>

      <div className="drop-down">
      <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Testimonial
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Contact Me
            </a>
          </li>


            <li><a href="getStarted" className="action-btn">Contact Me</a>  </li>
        </div>
    </header>



  );
};
