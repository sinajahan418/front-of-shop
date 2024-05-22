import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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
            src="https://set-coffee.com/wp-content/uploads/2023/12/slide.jpg"
            alt="Slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://set-coffee.com/wp-content/uploads/2023/12/slide.jpg"
            alt="Slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://set-coffee.com/wp-content/uploads/2023/12/slide.jpg"
            alt="Slide"
          />
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Header;
