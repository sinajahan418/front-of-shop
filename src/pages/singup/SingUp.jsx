import React, { useState } from "react";
// import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import loginIcon from "../../assest/signin.gif";
import imageTobase64 from "../../hellpers/ImgTobeas64";


const SingUp = () => {
  const [shoPass, setShoPass] = useState(false);
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigat = useNavigate();

  const handleFile = async (e) => {
    const file = setProfile(e.target.files[0]);
    const image = await imageTobase64(file);
    console.log(image);
    setProfile((preve) => {
      return {
        ...preve,
        profile: image,
      };
    });
  };
  const handleSignUP = async () => {
    const user = { name, email, password, confirmPassword };

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (res.status === 201) {
      localStorage.setItem("user", JSON.stringify(data));
      navigat("/");
    }
  };

  return (
    <div className=" w-full ">
      <div className="flex-col flex justify-center items-center mt-[10rem]">
        <div className=" flex-col gap-6 flex justify-center items-center text-[14px]">
          {" "}
          <img
            className=" flex justify-center items-center mr-5 text-center size-9 cursor-pointer"
            src={profile || loginIcon}
            alt=""
          />{" "}
          <p className="ml-[-17px] mt-10 border-zinc-700 border-[1px] absolute rounded-3xl ">
            chose file
          </p>
          <label className=" opacity-0 relative">
            <input
              files={profile}
              onChange={handleFile}
              className=" outline-none border-0"
              type="file"
            />
          </label>
        </div>
        <form className=" mt-5">
          <div className=" mt-4 flex flex-col">
            <label>
              <span>name</span>
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" bg-slate-300  rounded-2xl"
              type="text"
              placeholder="name"
            />
          </div>
          <div className=" mt-4 flex flex-col">
            <label>
              <span>email</span>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" bg-slate-300  rounded-2xl"
              type="email"
              placeholder="email"
            />
          </div>
          <div className=" mt-4 flex flex-col">
            <label>
              <span>password</span>
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" bg-slate-300  rounded-2xl"
              type={shoPass ? "text" : "password"}
              placeholder="password"
            />
            {shoPass ? (
              <FaEyeSlash onClick={() => setShoPass(false)} />
            ) : (
              <FaEye onClick={() => setShoPass(true)} />
            )}
          </div>
          <div className=" mt-4 flex flex-col">
            <label>
              <span>confirm password</span>
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className=" bg-slate-300  rounded-2xl"
              type="password"
              placeholder="password"
            />
          </div>
        </form>
        <div>
          <button
            onClick={handleSignUP}
            className="p-3 mt-6 bg-slate-400 rounded-lg hover:text-zinc-700"
          >
            SingUp
          </button>
        </div>
        <Link to="/login">already have accont</Link>
      </div>
    </div>
  );
};

export default SingUp;
