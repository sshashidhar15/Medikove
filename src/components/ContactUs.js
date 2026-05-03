// import React, { lazy, Component } from "react";
// import { ReactComponent as IconEnvelopeFill } from "bootstrap-icons/icons/envelope-fill.svg";
// import { ReactComponent as IconHouseFill } from "bootstrap-icons/icons/house-fill.svg";
// import { ReactComponent as IconTelephoneFill } from "bootstrap-icons/icons/telephone-fill.svg";

// //const ContactUsForm = lazy(() => import("../../components/ContactUsForm"));

// function ContactUs() {
  
//    function onSubmit(values)  {
//     alert(JSON.stringify(values));
//   };

//     return (
//       <div className="container my-3">
//         <div className="row g-3">
//           <div className="col-md-8">
//             <div className="card">
//               <div className="card-header">
//                 <IconEnvelopeFill className="i-va" /> Send Message
//               </div>
//              {/* <div className="card-body">
//                 <ContactUsForm onSubmit={onSubmit} />
//     </div> */}
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card mb-3">
//               <div className="card-header">
//                 <IconHouseFill className="i-va" /> Address
//               </div>
//               <div className="card-body">
//                 <h6 className="card-title border-bottom border-dark pb-2">Head Office</h6>
//                 <address>
//                   <strong>Medikove, Inc.</strong>
//                   <br />
//                   Gachibowli
//                   <br />
//                   Hyderabad, TN 500019
//                   <br />
//                   <IconTelephoneFill className="i-va" />{" "}
//                   <abbr title="Phone">P:</abbr> (91) 9502451335
//                 </address>
//                 {/*<h6 className="card-title border-bottom border-dark pb-2">Development Office</h6>
//                 <address>
//                   <strong>Twitter, Inc.</strong>
//                   <br />
//                   1355 Market St, Suite 900
//                   <br />
//                   San Francisco, CA 94103
//                   <br />
//                   <IconTelephoneFill className="i-va" />{" "}
//                   <abbr title="Phone">P:</abbr> (123) 456-7890
// </address> */}
//               </div>
//             </div>
//             <div className="card">
//               <div className="google-maps">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.674029502421!2d78.32962821530566!3d17.42742428805462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb937bca109447%3A0x13fe88d4363d2756!2sQ%20City!5e0!3m2!1sen!2sin!4v1655931320747!5m2!1sen!2sin"
    
//                   width={400}
//                   height={300}
//                   frameBorder={0}
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   aria-hidden="false"
//                   tabIndex={0}
//                   title="Location"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

// export default ContactUs;


import React from "react";
import "../components/styles/ContactUs.scss";

function ContactUs() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-eyebrow">Contact KalBridge</p>
        <h1>We’re here to help you</h1>
        <p>
          Reach out for visa medical verification, document support,
          physiotherapy services, or general enquiries.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Our team will guide you through the right service and next steps.</p>

          <div className="info-card">
            <h4>Phone</h4>
            <p>
              <a href="tel:+919502451335">+91 9502451335</a>
            </p>
          </div>

          <div className="info-card">
            <h4>Email</h4>
            <p>
              <a href="mailto:info@kalbridge.com">info@kalbridge.com</a>
            </p>
          </div>

          <div className="info-card">
            <h4>Location</h4>
            <p>Hyderabad, Telangana, India</p>
          </div>

          <div className="info-card">
            <h4>Working Hours</h4>
            <p>Monday – Saturday, 9:00 AM – 6:00 PM</p>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send an Enquiry</h2>

          <form>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Phone Number</label>
            <input type="tel" placeholder="Enter mobile number" />

            <label>Email Address</label>
            <input type="email" placeholder="Enter email address" />

            <label>Service Required</label>
            <select>
              <option>Select service</option>
              <option>Australia Medical Tests</option>
              <option>New Zealand Medical Tests</option>
              <option>Geriatric Physiotherapy</option>
              <option>Document Verification</option>
            </select>

            <label>Message</label>
            <textarea rows="4" placeholder="Write your message"></textarea>

            <button type="submit">Submit Enquiry</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;
