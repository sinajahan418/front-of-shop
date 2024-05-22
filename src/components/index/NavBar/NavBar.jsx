import React from "react";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import Logo from "../logo";
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

const NavBar = () => {
  const authUser = localStorage.getItem("user");
  const navegate = useNavigate();
  const handleLogout = () => {
    swal({
      title: "you want to live",
      icon: "danger",
      buttons: ["no", "yes"],
    }).then((result) => {
      if (result) {
        localStorage.removeItem("user");
        navegate("/login");
      }
    });
  };
  const bgWhite = "http://localhost:3000";
  const bgAdmin = "http://localhost:3000/p-admin";
  const myURL = document.URL;

  return (
    <div className=" container mx-auto opacity-100 z-50">
      <div
        className={
          myURL == bgAdmin
            ? " rounded-md container mx-auto  shadow-md flex mt-4 items-center p-3 justify-between z-50 absolute bg-white bg-gradient-to-r from-violet-500 to-fuchsia-500"
            : " rounded-md container mx-auto  shadow-md flex mt-4 items-center p-3 justify-between z-50 absolute bg-white "
        }
      >
        <a href="/">
          <Logo w={90} h={50} />
        </a>

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
            <Link to="/p-admin">
              <FaRegUserCircle className=" size-7 cursor-pointer" />
            </Link>
          </div>
          <div>
            {authUser ? (
              <div className=" bg-slate-400 rounded-3xl p-2">
                <LuLogOut onClick={handleLogout} />
              </div>
            ) : (
              <button className=" bg-slate-400 p-2 rounded-2xl text-zinc-100">
                <a href="/login">Login</a>{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
