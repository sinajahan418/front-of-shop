import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import img1 from "../../../assest/banner/img1.webp"
import img2 from "../../../assest/banner/img5.webp"
import img3 from "../../../assest/banner/img2_mobile.webp"
// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";

import NavBar from "../NavBar/NavBar";

const Header = () => {
 

  return (
    <header className="">
        <NavBar/>
      <Swiper
        pagination={true}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className=" relative z-0"
            src={img1}
            alt="Slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt="Slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            alt="Slide"
          />
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Header;
