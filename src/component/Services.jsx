import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Services</h2>
            <h3 className="section-subheading text-muted">
              Process is a set of steps or guidelines that an organization or
              individual uses to achieve goals or complete a task. It starts
              with planning, setting goals, and allocating necessary resources.
              It then enters the operational phase, which may include delegating
              duties and performing tasks in a specified order. <br />
              During the operation, the organization or individual must monitor,
              inspect, and evaluate to ensure that the work is proceeding as
              planned. If problems or obstacles are found, improvements and
              corrections may be required to increase efficiency. After the
              process is complete, the results may be summarized and the
              information obtained may be used to further develop and improve it
              in the future. <br />
              Having a good process system helps to organize work, reduce
              errors, and increase the chances of achieving the set goals.
            </h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <img
                className="Consultpng"
                src="../public/images/Service/Consult.png"
              />
            </span>
            <h4 className="service-heading">Consult</h4>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <img
                className="Consultpng"
                src="../public/images/Service/survey.png"
              />
            </span>
            <h4 className="service-heading">Survey</h4>
          </div>

          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <img
                className="Consultpng"
                src="../public/images/Service/planing.png"
              />
            </span>
            <h4 className="service-heading">Planing</h4>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <img
                className="Consultpng"
                src="../public/images/Service/installation.png"
              />
            </span>
            <h4 className="service-heading">Installation</h4>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <img
                className="Consultpng"
                src="../public/images/Service/maintenance.png"
              />
            </span>
            <h4 className="service-heading">Maintenance</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
