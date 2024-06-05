import React, { useEffect, useState } from 'react';
import img from "../../../assest/products/airpodes/aird.webp";
import { FaSearchPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";


const CategoryList = () => {
    const [categoryProduct , setCategoryProduct] = useState([])
    const [loding , setLoding] = useState(false)
    const getCategoryProduct = async()=>{
      setLoding(true)
        const res = await fetch("/api/get-categoryProduct")
        const data = await res.json()
        setCategoryProduct(data.data)
        setLoding(false)
    }
    console.log(categoryProduct);
    useEffect(()=>{
        getCategoryProduct()
    },[])
  return (
    <>
    {
      loding && (<h1> loding ...</h1>)
    }
    <h2 className=' mb-3 mt-[-20px] p-4 bg-gray-300 flex ml-4  w-52 rounded-3xl'>what are you looking for</h2>
    <div className="products rounded-3xl  max-sm:overflow-x-scroll bg-gradient-to-r from-slate-300 to-slate-800">
        
      {
        categoryProduct.map((product , index) => {
            return(
                <div className='bghover bg-slate-200 rounded-full '>
                    <div>
                        <img src={img} width={220} height={270} alt={product?.category}/>
                    </div>
                    <div className=' hidden hiddenicon'>
                        <p className=' text-slate-50 text-3xl size-9'><FaSearchPlus/></p>
                        <p className=' text-slate-50 text-3xl size-9'><FaRegHeart/></p>
                    </div>
                    <p className='cat text-center'>{product?.category}</p>
                    
                </div>
            )
        })
      }
    </div>
    </>
  );
}

export default CategoryList;
