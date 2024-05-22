import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shoPass, setShoPass] = useState(false);
  const navigate = useNavigate();

  const handelLogin = async () => {
    const user = { name: email, password };
    const res = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (res.status === 200) {
      localStorage.setItem("user", JSON.stringify(user));
      swal({
        title: "sing up beach",
        icon: "success",
        buttons: "god job",
      }).then(() => {
        navigate("/p-admin");
      });
    }
    console.log(res);
  };
  return (
    <div className=" w-full ">
      <div className="flex-col flex justify-center items-center mt-[10rem]">
        <p>
          <FaRegUserCircle className=" size-7 cursor-pointer" />
        </p>
        <h1>welcome</h1>
        <form className=" mt-5">
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
        </form>
        <a href="/#" className="">
          {" "}
          forget password
        </a>
        <div>
          <button
            onClick={handelLogin}
            className="p-3 mt-6 bg-slate-400 rounded-lg hover:text-zinc-700"
          >
            login
          </button>
        </div>
        <Link to="/sing-up">dont have accont?</Link>
      </div>
    </div>
  );
};

export default LoginForm;
