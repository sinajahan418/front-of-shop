import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import {Link} from "react-router-dom"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const SingUp = () => {
  const [shoPass, setShoPass] = useState(false);

  return (
    <div className=" w-full ">
    <div className="flex-col flex justify-center items-center mt-[10rem]">
      <p><FaRegUserCircle className=" size-7 cursor-pointer" /></p>
      <h1>welcome</h1>
      <form className=" mt-5">
        <div className=" mt-4 flex flex-col">
          <label>
            <span>email</span>
          </label>
          <input className=" bg-slate-300  rounded-2xl" type="email" placeholder="email"/>
        </div>
        <div className=" mt-4 flex flex-col">
          <label>
            <span>name</span>
          </label>
          <input className=" bg-slate-300  rounded-2xl" type="text" placeholder="password"/>
        </div>
        <div className=" mt-4 flex flex-col">
          <label>
            <span>password</span>
          </label>
          <input className=" bg-slate-300  rounded-2xl" type={shoPass ? "text" : "password"} placeholder="password"/>
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
          <input className=" bg-slate-300  rounded-2xl" type="password" placeholder="password"/>
        </div>
      </form>
      <div>
          <button className="p-3 mt-6 bg-slate-400 rounded-lg hover:text-zinc-700">SingUp</button>
      </div>
      <Link to="/login">already have accont</Link>
    </div>
  </div>
  );
}

export default SingUp;
