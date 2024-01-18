import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.jpg";
import "./Navbar.css"; // Your CSS file for styling

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className={`navbar ${scrollNav && "scrollNav"}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="" />
        </Link>
        <div className={`menu-icon ${showNav && "change"}`} onClick={toggleNav}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`nav-menu ${showNav && "active"}`}>
          <li
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/events" ? "active" : ""
            }`}
          >
            <Link to="/events" className="nav-links">
              Events
            </Link>
          </li>

          <li
            className={`nav-item ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/socialmedia" ? "active" : ""
            }`}
          >
            <Link to="/socialmedia" className="nav-links">
              Online
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/giving" ? "active" : ""
            }`}
          >
            <Link to="/giving" className="nav-links">
              Giving
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "branches" ? "active" : ""
            }`}
          >
            <Link to="branches" className="nav-links">
              Branches
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
