import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ markup }) => {
  const [isSidebarOpen, changeSidebar] = useState(false)
  function toggle_sidebar() {
    changeSidebar(!isSidebarOpen)
  }


  const [activeLink, setActiveLink] = useState("");


  useEffect(() => {
    switch (markup) {
      case 1:
        setActiveLink("home");
        break;
      case 2:
        setActiveLink("about");
        break;
      case 3:
        setActiveLink("contact");
        break;
      case 4:
        setActiveLink("practice");
        break;
      default:
        setActiveLink("");
    }
  }, [markup]);

  return (
    <nav>
      <div className="for_pc_navbar">
        <img className="logo_navbar" src={logo} alt="Advocates" />
        <ul className="navbar_ul_pc">
          <li
            className={`navbar_li_pc ${activeLink === "home" ? "circle" : ""}`}
          >
            <Link className="noline" to={`/`}>
              Home
            </Link>
          </li>
          <li
            className={`navbar_li_pc ${activeLink === "about" ? "circle" : ""}`}
          >
            <Link className="noline" to={`/about`}>
              About Us
            </Link>
          </li>
          <li
            className={`navbar_li_pc ${
              activeLink === "contact" ? "circle" : ""
            }`}
          >
            <Link className="noline" to={`/contact`}>
              Contact Us
            </Link>{" "}
          </li>
          <li
            className={`navbar_li_pc ${
              activeLink === "practice" ? "circle" : ""
            }`}
          >
            <Link className="noline" to={`/practice-area`}>
              Practice Area
            </Link>
          </li>
          <button className="navbar_button_pc">Free Consultation</button>
        </ul>
      </div>

      <div className="for_mobile_navbar">
        <img className="logo_navbar" src={logo} alt="Advocates" />
        <div></div>
        <span className="material-symbols-outlined" onClick={toggle_sidebar}>menu</span>
      </div>






      <div className={` ${isSidebarOpen ? 'Sidebar_navbar': 'display_none'}`}>
      <span className={`material-symbols-outlined close`} onClick={toggle_sidebar}>
close
</span>
      <ul className="navbar_ul_mobile">

          <li
            className={`navbar_li_pc ${activeLink === "home" ? "circle" : ""}`}
          >
            <Link className="noline" to={`/`}>
              Home
            </Link>
          </li>
          <li
            className={`navbar_li_pc ${activeLink === "about" ? "circle" : ""}`}
          >
            <Link className="noline" to={`/about`}>
              About Us
            </Link>
          </li>
          <li
            className={`navbar_li_pc ${
              activeLink === "contact" ? "circle" : ""
            }`}
          >
            <Link className="noline" to={`/contact`}>
              Contact Us
            </Link>{" "}
          </li>
          <li
            className={`navbar_li_pc ${
              activeLink === "practice" ? "circle" : ""
            }`}
          >
            <Link className="noline" to={`/practice-area`}>
              Practice Area
            </Link>
          </li>
          <button className="navbar_button_pc">Free Consultation</button>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
