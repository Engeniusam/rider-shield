import React from "react";
import bikers from "../Assets/bike-riders1.jpeg";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={bikers} alt="Bike Riders" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to RiderShield, your trusted partner in bike rider insurance.
          We're passionate about protecting riders and their machines, whether
          you're a daily commuter, weekend warrior, or professional racer. Our
          team of motorcycle enthusiasts and insurance experts work together to
          offer third party and comprehensive coverage tailored to the unique
          needs of bike riders at an affordable price on. With RiderShield, you
          can focus on the thrill of the ride while we take care of the risks.
        </p>

        <h4 className="about-text-title">Our Solutions</h4>

        <SolutionStep
          title="Customize Your Coverage"
          description="Choose from our range of insurance options to create a policy that fits your riding style, bike type, and budget. We offer everything from basic liability to comprehensive coverage."
        />

        <SolutionStep
          title="Easy Claims Process"
          description="In the event of an accident or theft, our streamlined claims process ensures you're back on the road quickly. Our 24/7 support team is always ready to assist you."
        />

        <SolutionStep
          title="Empower Your Journey"
          description="Enjoy exclusive benefits like roadside assistance, gear protection, and discounts on safety courses. We're not just insuring your bike – we're investing in your riding experience."
        />
      </div>
    </div>
  );
}

export default About;
