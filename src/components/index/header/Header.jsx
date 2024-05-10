import React from "react";
import Logo from "../logo";
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Header = () => {
  return (
    <header className="">
      <div className=" container mx-auto opacity-100 z-50">
        <div className=" rounded-md container mx-auto  shadow-md flex mt-4 items-center p-3 justify-between z-50 absolute bg-white">
          <Logo w={90} h={50} />
          <div className=" hidden lg:flex  w-56 justify-around">
            <input
              className=" bg-slate-300 rounded-lg bottom-0 outline-0"
              type="text"
              placeholder="search"
            />{" "}
            <IoSearch className=" size-7" />
          </div>
          <div className=" flex justify-around gap-4 items-center">
            <div className=" flex">
              <span>
                <GiShoppingCart className=" size-7 cursor-pointer" />
              </span>
              <div className=" text-xs bg-black text-zinc-50 rounded-full h-4 w-5 text-center">
                <p>18</p>
              </div>
            </div>
            <div>
              <FaRegUserCircle className=" size-7 cursor-pointer" />
            </div>
            <div>
              <button className=" bg-slate-400 p-2 rounded-2xl text-zinc-100">
                <a href="/login">Login</a>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
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
