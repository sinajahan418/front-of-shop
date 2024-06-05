import React, { useState } from "react";
import img from "../../../assest/products/airpodes/aird.webp";
import { FaSearchPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { useUplodeBox } from "../../../store/ShowUplodeBox";

const Product = ({ productName, price }) => {
  const {openUpdeateProduc, setOpenUpdeateProduc} = useUplodeBox()
  const {setProductDeteals} = useUplodeBox()
  const productD= ()=> {
     setProductDeteals([productName, price])
     setOpenUpdeateProduc(true)
  }
  return (
    <div className="">
      <div
        className={
          openUpdeateProduc
            ? "hidden"
            : "p-2 bg-slate-300 rounded-3xl h-[250px] z-0 relative icom"
        }
      >
        <img src={img} alt="" width={150} height={200} />
        <p className="p hidden mt-[-55px] gap-3 ">
          <FaSearchPlus />
        </p>
        <p className="p hidden mt-[-55px] gap-3">
          <FaRegHeart />
        </p>
        <div>
          <p>{productName}</p>
          <span>{price}</span>
        </div>
        <div>
          <MdEdit onClick={productD} />
        </div>
      </div>
      <div>
  
      </div>
    </div>
  );
};

export default Product;
