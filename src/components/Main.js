import React from "react";
import Form from "./Form";
import "../components/styles/Main.scss";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Main() {

  const inputRef = React.useRef(null);

  const handleFocus = () => {
  inputRef.current.focus();
};

// const navigate = useNavigate();


  return (
    <main className="main">
      <div className="main-container">
        <div className="main-left">
          <p className="eyebrow">Visa Medical Verification Services</p>

          <h1 className="hero-text">
            Medical Verification for Global Migration
          </h1>

          <p className="hero-subtext">
            Simplifying medical tests, document checks, and clinic coordination
            for international education and professional compliance.
          </p>

          <div className="hero-services">
            <div className="service-item">
              <span className="service-dot"></span>
              <p>Visa Medical Test Coordination</p>
            </div>

            <div className="service-item">
              <span className="service-dot"></span>
              <p>Documentation & Medical Records Verification</p>
            </div>

            <div className="service-item">
              <span className="service-dot"></span>
              <p>Geriatric Physiotherapy Services</p>
            </div>
          </div>

          <div className="hero-actions">
            <button type="button" onClick={handleFocus}>Book Consultation</button>
            
              <Link to="/medical-tests" className="outline">
                            View Medical Tests

                            </Link>
              
    
          </div>
        </div>

        <div className="main-right">
          <Form inputRef={inputRef} />
        </div>
      </div>
    </main>
  );
}

export default Main;