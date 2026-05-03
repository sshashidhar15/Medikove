import React from "react";

import "../components/styles/Main.scss"

const data = [
  {
    name: "Teja",
    text: "Well today I visited here, staff were friendly and the process was quick. It took only 2 hours.",
    initial: "T",
  },
  {
    name: "Saimurali Krishna",
    text: "Excellent and very quick service provided. Staff helped in all required information.",
    initial: "S",
  },
  {
    name: "Kalpesh Rajpurohit",
    text: "Very hygienic place. Doctors are polite and the process is smooth and well managed.",
    initial: "K",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="title">TESTIMONIALS</h2>

        <div className="testimonial-wrapper">
          {data.map((item, index) => (
            <div className="testimonial-card" key={index}>
              
              <div className="top">
                <div className="avatar">{item.initial}</div>
                <div className="name">{item.name}</div>
              </div>

              <p className="text">“{item.text}”</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;