import React from "react";
import InformationCard from "./InformationCard";
import { faShieldAlt, faCar, faRoad } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
import BlinkingText from "./BlinkingText";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Offer</span>
        </h3>
        <p className="info-description">
          We provide comprehensive insurance solutions designed specifically for
          bike riders. Our coverage options are flexible, affordable, and
          tailored to meet the unique needs of motorcyclists. Whether you're a
          daily commuter or a weekend adventurer, we've got you covered with
          policies that protect both you and your ride.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Monthly Third Party Insurance"
          description="This is the minimum legal requirement in Kenya. It covers damages caused to other people and their property, but it does not cover damages to the insured motorcycle or the rider. Our third party insurance is affordable and easy to purchase."
          icon={faCar}
        />

        <InformationCard
          title="Monthly Comprehensive Insurance"
          description="We cover damages caused to other people and their property, theft, and damage caused to the insured motorcycle."
          icon={faShieldAlt}
        />

        <InformationCard
          title="Roadside Assistance"
          description="Never be stranded on the side of the road again. Our 24/7 roadside assistance service is always ready to help with flat tires, dead batteries, or mechanical issues. We'll get you back on your bike and back to enjoying your ride as quickly as possible."
          icon={faRoad}
        />
      </div>
      <BlinkingText />
    </div>
  );
}

export default Info;
