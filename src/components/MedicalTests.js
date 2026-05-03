import React from "react";
import "../components/styles/MedicalTests.scss";

function MedicalTests() {
  return (
    <div className="medical-page">

      {/* <h2 className="page-title">Medical Tests</h2> */}

      {/* ===== AUSTRALIA ===== */}
      <div className="medical-card">

        <div className="country-title">
          <img src="https://flagcdn.com/w40/au.png" alt="Australia" />
          <h3>Australia</h3>
        </div>

        <div className="medical-card-content">

          {/* Documents */}
          <div className="documents">
            <h4>Required Documents</h4>
            <ul>
              <li>Original Passport</li>
              <li>Passport copies (1st & last pages)</li>
              <li>HAP ID / TRN Number</li>
              <li>Past medical records</li>
              <li>Current medications</li>
              <li>TB treatment records (if any)</li>
              <li>COVID vaccination certificate</li>
              <li>Email ID (self/relative)</li>
            </ul>
          </div>

          {/* Pricing */}
          <div className="pricing">
            <h4>Tests & Pricing</h4>
            <div className="price-box">
              <p>Physical Exam – ₹4000</p>
              <p>Creatinine – ₹300</p>
              <p>X-Ray – ₹1200</p>
              <p>TB Screening – ₹1000</p>
              <strong>Total – ₹6500</strong>
            </div>
          </div>

        </div>
      </div>

      {/* ===== NEW ZEALAND ===== */}
      <div className="medical-card">

        <div className="country-title">
          <img src="https://flagcdn.com/w40/nz.png" alt="New Zealand" />
          <h3>New Zealand</h3>
        </div>

        <div className="medical-card-content">

          {/* Documents */}
          <div className="documents">
            <h4>Required Documents</h4>
            <ul>
              <li>Original Passport</li>
              <li>Passport copies (1st & last pages)</li>
              <li>Past medical records</li>
              <li>Current medications</li>
              <li>TB treatment records (if any)</li>
              <li>ID proof if passport submitted (Aadhar / DL)</li>
            </ul>
          </div>

          {/* Pricing */}
          <div className="pricing">
            <h4>Tests & Pricing</h4>
            <div className="price-box">
              <p>Medical Exam – ₹4000</p>
              <p>HBsAG – ₹600</p>
              <p>HIV – ₹1000</p>
              <p>HCV – ₹900</p>
              <p>X-Ray – ₹1200</p>
              <p>Urine – ₹300</p>
              <p>VDRL – ₹300</p>
              <p>Creatinine – ₹300</p>
              <p>CBC – ₹400</p>
              <p>HBA1C – ₹500</p>
              <strong>Total – ₹9500</strong>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default MedicalTests;