import React from "react";
import "../components/styles/Main.scss"

const ProcessNew = () => {
  return (
    <section className="process">
      <div className="process__container">
        <p className="process__subtitle">Process</p>
        <h2 className="process__title">Simple 2-Step Medical Process</h2>

        <div className="process__flow">
          {/* Step 1 */}
          <div className="process__step">
            <div className="process__circle">01</div>
            <h3>Home Collection & Lab Processing</h3>
            <ul>
              <li>Blood and Urine Collection</li>
              <li>Document Verification</li>
              <li>Lab Processing</li>
              <li>Report Preparation</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="process__step">
            <div className="process__circle">02</div>
            <h3>Clinic Visit & Final Report</h3>
            <ul>
              <li>Doctor Examination</li>
              <li>X-ray / Tests (if required)</li>
              <li>Final Report Preparation</li>
              <li>Report Submission</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessNew;