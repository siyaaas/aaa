import React from "react";
import PageBrandSlider from "./Brander";
import "./Team.css";

const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <div className="row">
          <PageBrandSlider />
        </div>
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <p className="large text-muted">
              "Customer trust is our driving force." <br /> We prioritize
              customer trust as the core driving force of our organization.
              Customer trust is the driving force that drives us to continuously
              develop and improve our service standards. <br />
              We are committed to maintaining the best service standards by
              developing innovations, technologies and solutions that can
              effectively meet customer needs, whether it is to increase
              convenience, improve quality or create confidence in use. In
              addition, we believe in sustainable growth together by building
              long-term relationships with customers, partners and all
              stakeholders. Our goal is to create a stable future and grow
              together so that all parties benefit the most and have sustainable
              progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
