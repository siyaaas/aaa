import React, { useEffect, useState } from "react";
import "./HeaderContent.css";

const HeroSection = ({ setBodyClass }) => {
  return (
    <div className="hero-section">
      {/* <div
        className="about-text hover-target"
        onClick={() => setBodyClass("about-on")}
      >
        about
      </div>
      <div
        className="contact-text hover-target"
        onClick={() => setBodyClass("contact-on")}
      >
        contact
      </div> */}
      <div className="section-center">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 text-center mt-4 mt-lg-5">
              <p>
                <span
                  className="executive hover-target"
                  onClick={() => setBodyClass("executive-on")}
                >
                  <button className="btn-header">Executive</button>
                </span>{" "}
                <span
                  className="location hover-target"
                  onClick={() => setBodyClass("location-on")}
                >
                  <button className="btn-header">Location</button>
                </span>{" "}
                <span
                  className="description hover-target"
                  onClick={() => setBodyClass("description-on")}
                >
                  <button className="btn-header">Description</button>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const AboutSection = ({ setBodyClass }) => {
//   return (
//     <div className="about-section">
//       <div
//         className="about-close hover-target"
//         onClick={() => setBodyClass("")}
//       ></div>
//       <div className="section-center">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-12 text-center">
//               <img
//                 src="http://www.ivang-design.com/svg-load/portfolio/freel.jpg"
//                 alt=""
//               />
//             </div>
//             <div className="col-lg-8 text-center mt-4">
//               <p>
//                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//                 accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
//                 quae ab illo.
//               </p>
//             </div>
//             <div className="col-12 text-center"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ContactSection = ({ setBodyClass }) => {
//   return (
//     <div className="contact-section">
//       <div
//         className="contact-close hover-target"
//         onClick={() => setBodyClass("")}
//       ></div>
//       <div className="section-center">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-12 text-center">
//               <a href="#" className="hover-target">
//                 arete@photography.com
//               </a>
//             </div>
//             <div className="col-12 text-center social mt-4">
//               <a href="#" className="hover-target">
//                 instagram
//               </a>
//               <a href="#" className="hover-target">
//                 flickr
//               </a>
//               <a href="#" className="hover-target">
//                 facebook
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const SectionTemplate = ({ title, closeClass, setBodyClass, children }) => {
  return (
    <div className={`${title.toLowerCase()}-section`}>
      <div
        className={`${closeClass} hover-target`}
        onClick={() => setBodyClass("")}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h3>{title}</h3>
          </div>
          <div className="col-12 mt-3 text-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

const HeaderContent = () => {
  const [bodyClass, setBodyClass] = useState("");

  useEffect(() => {
    document.body.className = bodyClass;
  }, [bodyClass]);

  return (
    <>
      <HeroSection setBodyClass={setBodyClass} />
      {/* <AboutSection setBodyClass={setBodyClass} />
      <ContactSection setBodyClass={setBodyClass} /> */}
      <SectionTemplate
        title="executive"
        closeClass="executive-close"
        setBodyClass={setBodyClass}
      >
        <div className="img-allMD">
          <div className="img-MD">
            <img className="img-MD1" src="../public/images/MD1.jpg" />
            <h5>Mr.Amnat Hanprasitkham</h5>
          </div>
          <div className="img-MD1">
            <img className="" src="../public/images/MD2.jpg" />
            <h5>Miss.Anchara Lawang</h5>
          </div>
        </div>
      </SectionTemplate>
      <SectionTemplate
        title="location"
        closeClass="location-close"
        setBodyClass={setBodyClass}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.167167285039!2d100.51327557469693!3d13.888950686517317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e284bb7c6b6b63%3A0x2499f1d012380ea9!2z4Lia4LiI4LiBLiDguYDguIvguYfguJcg4LiB4Lij4Li44LmK4LibIOC5guC4i-C4peC4ueC4iuC4seC5iOC4mQ!5e0!3m2!1sth!2sth!4v1723438259225!5m2!1sth!2sth"
          width="900"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </SectionTemplate>
      <SectionTemplate
        title="description"
        closeClass="description-close"
        setBodyClass={setBodyClass}
      >
        <div className="sethome">
          <h5 className="text-home">
            Your company is a leading provider in the design, installation, and
            servicing of advanced technology infrastructure, with expertise
            extending across telecommunications systems, security systems, and
            network infrastructure. Here's an expanded explanation: Your company
            not only excels in the design and installation of advanced
            technology infrastructure but also offers comprehensive services.
            These include consulting, planning, equipment procurement, system
            installation, testing, and post-installation maintenance, ensuring
            that your clients' needs for security and system stability are fully
            met. In telecommunications, your company specializes in designing
            and installing high-performance communication systems, whether it be
            voice, data, or video communication systems. These are crucial for
            organizations that require secure and rapid communication channels.
            In the realm of security systems, your company has expertise in
            designing modern security solutions such as CCTV systems, access
            control systems, alarm systems, and more. These systems help clients
            effectively protect their assets and critical information. Moreover,
            your company is proficient in designing and installing highly
            efficient network infrastructure to support interconnected systems
            across organizations and even on a national scale. Customer
            satisfaction is at the core of your operations, and your company
            continually develops and improves its services to meet the
            ever-evolving demands of the technology landscape.
          </h5>
          <img className="imgsethome" src="../public/images/Sethome.JPG" />
        </div>
      </SectionTemplate>
      {/* <PageCursors /> */}
    </>
  );
};

export default HeaderContent;
