import React from "react";
import Flickity from "react-flickity-component";
import "./Brander.scss";

const PageBrandSlider = () => {
  const flickityOptions = {
    contain: true,
    pageDots: false,
    wrapAround: true,
    freeScroll: true,
    autoPlay: 1600,
  };

  return (
    <div>
      <div className="brander-text">
        <h2>CLIENTS</h2>
      </div>
      <div className="brands-wrap">
        <Flickity className={"brand-carousel"} options={flickityOptions}>
          <div className="gallery-cell">
            <img src="../public/images/About Us/logo-doh.png" alt="กรมทางหลวง" />
          </div>
          <div className="gallery-cell">
            <img
              src="../public/images/About Us/logo-hww.png"
              alt="สำนักงานควบคุมน้ำหนักยานพาหนะ"
            />
          </div>
          <div className="gallery-cell">
            <img src="../public/images/About Us/logo-mtw.png" alt="มอเตอร์เวย์" />
          </div>
          <div className="gallery-cell">
            <img
              src="../public/images/About Us/logo-police.png"
              alt="การตำรวจภาค7"
            />
          </div>
          <div className="gallery-cell">
            <img src="../public/images/About Us/logo-water.png" alt="การปะปา" />
          </div>
          <div className="gallery-cell">
            <img src="../public/images/About Us/logo-train.png" alt="การรถไฟ" />
          </div>
          <div className="gallery-cell">
            <img src="../public/images/About Us/logo-bbl.png" alt="" />
          </div>
          <div className="gallery-cell">
            <img src="../public/images/About Us/logo-bjc.png" alt="" />
          </div>

          <div className="gallery-cell">
            <img src="../public/images/About Us/logo-cholpathan.png" alt="" />
          </div>
          <div className="gallery-cell">
            <img src="../public/images/About Us/logo-exat.png" alt="" />
          </div>
          <div className="gallery-cell">
            <img src="../public/images/About Us/logo-major.png" alt="" />
          </div>
          <div className="gallery-cell">
            <img src="../public/images/About Us/logo-nt.png" alt="" />
          </div>
        </Flickity>
      </div>
    </div>
  );
};

export default PageBrandSlider;
