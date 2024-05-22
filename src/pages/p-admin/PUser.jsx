import React, { useEffect, useState } from "react";
import { useAuthUser } from "../../store/AuthUser";
import NavBar from "../../components/index/NavBar/NavBar";
import swal from "sweetalert";
import bgWall from "../../assest/bg.mp4";
import UserSaide from "../../components/tempelat/user/UserSIde/UserSaide";
import Footer from "../../components/index/footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";

const PUser = () => {
  const { authUser } = useAuthUser();
  const [windowHeight, setWindowHeight] = useState("");
  const navicate = useNavigate();

  useEffect(() => {
    const userName =
      authUser?.data?.name || JSON.parse(localStorage.getItem("user"))?.name;
    if (!userName) {
      navicate("/login");
    }
    if (userName) {
      swal({
        title: `welcom mr , ${userName}`,
        icon: "success",
        buttons: "thancks",
      });
    }
    const heigh = window.screen.height;
    setWindowHeight(heigh);
  }, []);
  return (
    <>
      <NavBar />
      <div
        style={{ height: { windowHeight } }}
        className=" text-slate-600  flex justify-start items-start "
      >
        <div className=" flex relative z-50 pt-[7rem] w-[30%]">
          <section className="w-[40%]">
            <UserSaide></UserSaide>
          </section>
        </div>
      </div>
      <Outlet/>
      <Footer />
    </>
  );
};

export default PUser;
