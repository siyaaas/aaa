import React from "react";
import "./About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

function PageAbout() {
  return (
    <Swiper
      dir="rtl"
      navigation={true}
      modules={[Navigation, Scrollbar, A11y, Autoplay, EffectFade]}
      className="mySwiper"
      slidesPerView="auto"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img src="/images/header7.jpg"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/header8.jpg"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/header3.jpg"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/header4.jpg"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/header5.jpg"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/header6.jpg"></img>
      </SwiperSlide>
    </Swiper>
  );
}

export default PageAbout;
