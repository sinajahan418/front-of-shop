import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../assest/products/airpodes/aird.webp";
import AddToCard from "../../../hellpers/addToCard";


const EarpodCategory = ({ category, header }) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const getRefrigeratorCategory = async () => {
      const res = await fetch("/api/category-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category }),
      });
      const data = await res.json();
      setDatas(data.data);
    };
    getRefrigeratorCategory();
  }, []);
  return (
    <>
      <h1 className=" text-2xl mt-4">{header}</h1>
    <div className="flex p-4 overflow-x-scroll hidScrole">
      {datas.map((product, index) => (
        <Link to={/product/ + product?._id} className="flex flex-row m-3">
          <img src={img} width={140} height={140} className=" bg-slate-200 rounded-lg" />
          <div className=" h-[140px] bg-slate-100 flex flex-col justify-center items-center p-2">
            <h3 className=" text-xl">{product?.productName}</h3>
            <p className="text-slate-700">{product?.brandName}</p>
            <div className=" flex flex-col justify-center items-center">
              <span>${product?.price}</span>
              <span className=" text-red-800 line-through">{product?.sellingPrice}</span>
            </div>
  
            <button className=" bg-gray-400 p-2 rounded-3xl" onClick={(e)=> AddToCard(e, product?._id) }>add to card</button>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
};

export default EarpodCategory;
