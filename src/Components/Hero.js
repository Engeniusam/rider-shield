import React, { useEffect, useState } from "react";
import Doctor from "../Assets/bike-rider.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <Marquee style={{ fontStyle: "italic" }}>Ride On, Worry Less</Marquee>
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">
            <span role="img" aria-label="party popper">
              🏍️
            </span>{" "}
            Ride with confidence{" "}
          </p>
          <h2 className="text-title">
            Protect your passion with our bike rider insurance
          </h2>
          <p className="text-descritpion">
            Get comprehensive coverage tailored for bike enthusiasts. Whether
            you're a daily commuter or a weekend warrior, our insurance keeps
            you protected on every ride. Enjoy the journey with peace of mind.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Apply for Insurance
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>100k+</p>
              <p>Protected Riders</p>
            </div>

            <div className="text-stats-container">
              <p>24/7</p>
              <p>Roadside Assistance</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Trust</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
