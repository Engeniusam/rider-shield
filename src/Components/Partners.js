import React from "react";
import InsurancePartnerCard from "./InsurancePartnerCard";
import partner1 from "../Assets/partner1.png";
import partner2 from "../Assets/partner2.png";
import partner3 from "../Assets/partner3.png";
import partner4 from "../Assets/partner4.svg";
import "../Styles/Doctors.css";

function Partners() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Our Insurance Partners</span>
        </h3>

        <p className="dt-description">
          RiderShield collaborates with top-rated insurance providers to offer
          you comprehensive coverage options. Our partners are committed to
          protecting riders and their bikes, ensuring you have the best support
          on every journey. Explore our network of trusted insurers and find the
          perfect coverage for your needs.
        </p>
      </div>

      <div className="dt-cards-content">
        <InsurancePartnerCard
          img={partner1}
          name="GearGuard Insurance"
          thirdpartyinsurance="Monthly Third Party Insurance = Kshs. 170"
          comprehensiveinsurance="Monthly Comprehensive Insurance = Kshs. 510"
          rating="4.9"
        />
        <InsurancePartnerCard
          img={partner2}
          name="RoadRider Assurance"
          thirdpartyinsurance="Monthly Third Party Insurance = Kshs. 150"
          comprehensiveinsurance="Monthly Comprehensive Insurance = Kshs. 520"
          rating="4.8"
        />
        <InsurancePartnerCard
          img={partner3}
          name="SpeedSafe Insurers"
          thirdpartyinsurance="Monthly Third Party Insurance = Kshs. 200"
          comprehensiveinsurance="Monthly Comprehensive Insurance = Kshs. 495"
          rating="4.7"
        />
        <InsurancePartnerCard
          img={partner4}
          name="CruiserCare Protection"
          thirdpartyinsurance="Monthly Third Party Insurance = Kshs. 180"
          comprehensiveinsurance="Monthly Comprehensive Insurance = Kshs. 515"
          rating="4.8"
        />
      </div>
      <br />
    </div>
  );
}

export default Partners;
