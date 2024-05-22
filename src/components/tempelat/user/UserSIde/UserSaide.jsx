import { CiSettings } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { AiFillProduct } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { IoHome } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";

const UserSaide = () => {
  const navegate = useNavigate();

  const handlereplace = () => {
    navegate("/");
  };
  return (
    <nav
     
      className=" h-full  p-5 rounded-3xl"
    >
      <div>
        <ul className=" text-[24px]">
          <div className="mt-7 flex gap-3 items-center justify-start">
            <p className=" bg-slate-400 rounded-full p-2">
              <AiFillProduct />
            </p>
            <li className=" text-slate-700">
              <Link  to={"/p-admin/products"}>product</Link>
            </li>
          </div>
          <div className="mt-7 flex gap-3 items-center justify-start">
            <p className=" bg-slate-400 rounded-full p-2">
              <FcLike />
            </p>
            <li  className=" text-slate-700">wishlist</li>
          </div>
          <div className="mt-7 flex gap-3 items-center justify-start">
            <p className=" bg-slate-700 rounded-full p-2">
              <HiUsers />
            </p>
            <li className=" text-slate-700 text-[20px]">
              <Link  to={"/p-admin/all-user"}>all USER</Link>
            </li>
          </div>
          <div className="mt-7 flex gap-3 items-center justify-start">
            <p className=" bg-slate-400 rounded-full p-2">
              <IoHome />
            </p>
            <li className=" text-slate-700 " onClick={handlereplace}>
              home 
            </li>
          </div>
          <div className="mt-7 flex gap-3 items-center justify-start">
            <p className=" bg-slate-400 rounded-full p-2">
              <CiSettings />
            </p>
            <li className=" text-slate-700">seting</li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default UserSaide;
