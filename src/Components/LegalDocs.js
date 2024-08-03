import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Rider<span className="legal-siteSign">Shield</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to RiderShield, your trusted motorcycle insurance platform.
          Our mission is to provide comprehensive and tailored insurance
          coverage for riders, ensuring peace of mind on every journey. By using
          our platform, you agree to the terms outlined in our Privacy Policy
          and Terms of Service.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is our top priority. Our Privacy Policy details how we
          collect, use, and protect your personal and insurance-related
          information. We employ state-of-the-art security measures to safeguard
          your data, ensuring it's handled with the utmost confidentiality and
          in compliance with all relevant regulations.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          By using RiderShield, you agree to our Terms of Service. These terms
          cover the use of our platform, policy agreements, claims processes,
          and the responsibilities of both parties. Understanding these terms is
          crucial for a smooth insurance experience and to ensure you get the
          most out of your coverage.
        </p>

        <p className="legal-title">Insurance Coverage</p>
        <p className="legal-description">
          RiderShield offers a range of insurance options tailored for
          motorcycle riders. Our coverage includes comprehensive insurance,
          collision coverage, liability protection, personal injury coverage,
          and additional options like roadside assistance. It's essential to
          review your policy details carefully and provide accurate information
          to ensure optimal coverage.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          RiderShield simplifies motorcycle insurance. You can easily get a
          quote, customize your coverage, and manage your policy through our
          platform. In the event of a claim, our streamlined process ensures
          quick and fair resolutions. Remember, while we're here to protect you,
          always prioritize safe riding practices. For emergencies, contact
          emergency services immediately before filing a claim.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2023-2024 RiderShield Insurance. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
