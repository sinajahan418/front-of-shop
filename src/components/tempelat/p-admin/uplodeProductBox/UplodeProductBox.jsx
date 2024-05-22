import React from "react";
import { IoClose } from "react-icons/io5";

const UplodeProductBox = ({ onClose }) => {
  return (
    <div className=" bg-slate-100 w-[60%] mt-[-6rem] ml-44 h-full rounded-xl">
      <div className="p-3">
        <div className="flex justify-between items-center p-4">
          <h1>UPLODE Product</h1>
          <div className=" text-2xl hover:text-blue-300" onClick={onClose}>
            <IoClose />
          </div>
        </div>
        <form className=" grid gap-3">
          <label htmlFor="produtName">produt Name:</label>
          <input
            type="text"
            id="produtName"
            placeholder="  enter product name"
            className=" p-1 border rounded-2xl outline-none"
          />
          <label htmlFor="produtName">produt Name:</label>
          <input
            type="text"
            id="produtName"
            placeholder="  enter product name"
            className=" p-1 border rounded-2xl outline-none"
          />
          <label htmlFor="produtName">produt Name:</label>
          <input
            type="text"
            id="produtName"
            placeholder="  enter product name"
            className=" p-1 border rounded-2xl outline-none"
          />
          <label htmlFor="produtName">produt Name:</label>
          <input
            type="text"
            id="produtName"
            placeholder="  enter product name"
            className=" p-1 border rounded-2xl outline-none"
          />
          <label htmlFor="produtName">produt Name:</label>
          <input
            type="text"
            id="produtName"
            placeholder="  enter product name"
            className=" p-1 border rounded-2xl outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default UplodeProductBox;
