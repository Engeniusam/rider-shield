import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import introJs from "intro.js";
import "intro.js/introjs.css";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const startTour = () => {
    introJs()
      .setOptions({
        steps: [
          {
            element: ".navbar-title",
            intro: "Welcome to RiderShield.",
          },
          {
            element: ".home",
            intro: "Ride with Confidence with us.",
          },
          {
            element: ".about",
            intro: "Find more about us here.",
          },
          {
            element: ".services",
            intro: "See the services we offer here.",
          },
          {
            element: ".reviews",
            intro: "What our customers say about us.",
          },
          {
            element: ".partners",
            intro: "Who we partner with.",
          },
          {
            element: ".text-appointment-btn",
            intro: "Apply for Insurance here.",
          },
          // {
          //   element: ".tawk-chat-bubble",
          //   intro: "Chat with our support team here.",
          // },
        ],
      })
      .start();
  };

  useEffect(() => {
    startTour();
  }, []);

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          Rider<span className="navbar-sign">Shield</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links home">
            Home
          </Link>
        </li>
        <li>
          <a href="#about" className="navbar-links about">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="navbar-links services">
            Services
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links reviews">
            Reviews
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links partners">
            Partners
          </a>
        </li>
      </ul>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Partners
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
