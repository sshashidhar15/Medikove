import React from "react";
import "../components/styles/Physiotherapy.scss";

function Physiotherapy() {

    const [showForm, setShowForm] = React.useState(false);



  return (
    <main className="physio-page">
      <section className="physio-hero">
        <div className="physio-hero-content">
          <p className="eyebrow">Geriatric Physiotherapy</p>
          <h1>Physiotherapy Support for Older Adults at Home</h1>
          <p>
            Guided physiotherapy care to help elderly patients improve mobility,
            reduce pain, recover from illness, and regain confidence in daily movement.
          </p>
          <button onClick={()=> setShowForm(true)}>Book Physiotherapy Consultation</button>
        </div>
      </section>

      <section className="physio-section">
        <div className="section-header">
          <p className="tag">Care Areas</p>
          <h2>Conditions We Support</h2>
        </div>

        <div className="condition-grid">
          <div className="condition-card">
            <h3>Orthopaedics Physiotherapy</h3>
            <p>
              Support for joint pain, back pain, knee pain, shoulder stiffness,
              and post-operative recovery.
            </p>
          </div>

          <div className="condition-card">
            <h3>Cardio Respiratory Physiotherapy</h3>
            <p>
              Breathing exercises and mobility support for patients recovering
              from respiratory or cardiac conditions.
            </p>
          </div>

          <div className="condition-card">
            <h3>Post Operative Care</h3>
            <p>
              Home-based recovery support after surgery with guided exercises
              and safe movement training.
            </p>
          </div>

          <div className="condition-card">
            <h3>Chronic Bronchitis</h3>
            <p>
              Physiotherapy support to improve breathing capacity and manage
              long-term respiratory discomfort.
            </p>
          </div>

          <div className="condition-card">
            <h3>Pneumothorax Recovery</h3>
            <p>
              Assisted breathing exercises and gradual activity support during recovery.
            </p>
          </div>

          <div className="condition-card">
            <h3>Asthma Support</h3>
            <p>
              Breathing techniques and exercise guidance to support better respiratory control.
            </p>
          </div>
        </div>
      </section>

      <section className="recovery-section">
        <div className="section-header">
          <p className="tag">Process</p>
          <h2>Simple Home Recovery Process</h2>
        </div>

        <div className="process-grid">
          <div className="process-step">
            <span>01</span>
            <h3>Book Appointment</h3>
            <p>Share patient details and preferred time for home visit.</p>
          </div>

          <div className="process-step">
            <span>02</span>
            <h3>Initial Assessment</h3>
            <p>Physiotherapist evaluates mobility, pain level, and recovery needs.</p>
          </div>

          <div className="process-step">
            <span>03</span>
            <h3>Personalized Plan</h3>
            <p>A safe exercise and therapy plan is prepared for the patient.</p>
          </div>

          <div className="process-step">
            <span>04</span>
            <h3>Guided Sessions</h3>
            <p>Regular sessions are conducted at home with progress tracking.</p>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div>
          <p className="tag">Why KalBridge</p>
          <h2>Care Designed for Comfort and Recovery</h2>
        </div>

        <ul>
          <li>Home-based physiotherapy for elderly patients</li>
          <li>Support for mobility, pain relief, and post-operative recovery</li>
          <li>Guided exercises with patient safety in mind</li>
          <li>Convenient scheduling and family coordination</li>
        </ul>
      </section>

{showForm && (
  <div className="soft-modal-overlay" onClick={() => setShowForm(false)}>
    <div className="soft-modal-card" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setShowForm(false)}>
        ×
      </button>

      <h2>Book Physiotherapy</h2>
      <p className="modal-subtitle">
        Share your details and our team will contact you.
      </p>

      <form>
        <label>Name</label>
        <input type="text" placeholder="Your name" />

        <label>Email</label>
        <input type="email" placeholder="Email address" />

        <label>Phone Number</label>
        <input type="tel" placeholder="Mobile number" />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  </div>
)}



    </main>
  );
}

export default Physiotherapy;