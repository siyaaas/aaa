import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">About</h2>
            <h3 className="section-subheading text-muted">
              SINCE OUR INCEPTION, WE HAVE GROWN STEADILY AND EXPANDED OUR
              BUSINESS INTO FOUR CORE BUSINESSES:{" "}
              {/* <br /> SET TECH LTD..PART.
              <br /> SET GROUP SOLUTION CO.,LTD. <br /> SAM TECHNOLOGY SUPPORT
              CO.,LTD. <br /> SET GROUP RETAIL CO.,LTD. */}
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li className="timeline-inverted">
                <div className="timeline-image img-responsive">
                  <img
                    className="img-responsive imgabout"
                    src="/public/images/SET_TECH.png"
                    alt=""
                  />
                </div>
                {/* <div className="timeline-image">
                  <h1 className="texttimeline">
                    S E T<br />
                    TECH
                  </h1>
                </div> */}
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>SET TECH LTD..PART.</h4>
                    <h4>was established in</h4>
                    <h4 className="subheading">January 22, 2001</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Currently the registered capital is 1 million baht.
                    </p>
                    <p className="text-muted">
                      Rent, design, install, sell computers and equipment
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image img-responsive">
                  <img
                    className="img-responsive imgabout"
                    src="/public/images/logo.png"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>SET GROUP SOLUTION CO.,LTD.</h4>
                    <h4>was established in</h4>
                    <h4 className="subheading">October 5, 2005 </h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Currently the registered capital is 100 million baht.
                    </p>
                    <p className="text-muted">
                      Design and install telecommunication network systems and
                      sell equipment used in telecommunication systems.
                    </p>
                  </div>
                </div>
              </li>

              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="img-responsive imgabout"
                    src="/public/images/Logo Sam 1.png"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>SAM TECHNOLOGY SUPPORT CO.,LTD.</h4>
                    <h4>was established in</h4>
                    <h4 className="subheading">September 18, 2013</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Currently the registered capital is 10 million baht.
                    </p>
                    <p className="text-muted">
                      Construction Contractor, Electrical System, Mechanical
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="timeline-image">
                  <img
                    className="img-responsive imgabout"
                    src="/public/images/set group retail.png"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>SET GROUP RETAIL CO.,LTD.</h4>
                    <h4>was established in</h4>
                    <h4 className="subheading">April 8, 2022</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Currently the registered capital is 40 million baht.
                    </p>
                    <p className="text-muted">
                      Food service in restaurants and food shops
                    </p>
                  </div>
                </div>
              </li>

              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>Be Part Of Story!</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
