import React from 'react';
import AddToCard from '../../../hellpers/addToCard';
import img from "../../../assest/products/airpodes/aird.webp";
import { Link } from 'react-router-dom';


const SearchCard = ({data}) => {
  return (
    <>
 
      <Link to={/product/ + data?._id} className="flex flex-col w-28 m-3">
        <img src={img} width={140} height={140} className=" bg-slate-200 rounded-lg" />
        <div className=" h-[140px] bg-slate-100 flex flex-col justify-center items-center p-2">
          <h3 className=" text-xl">{data?.productName}</h3>
          <p className="text-slate-700">{data?.brandName}</p>
          <div className=" flex flex-col justify-center items-center">
            <span>${data?.price}</span>
            <span className=" text-red-800 line-through">{data?.sellingPrice}</span>
          </div>

          <button className=" bg-gray-400 p-2 rounded-3xl" onClick={(e)=> AddToCard(e, data?._id) }>add to card</button>
        </div>
      </Link>
  </>
  );
}

export default SearchCard;
