import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/index/NavBar/NavBar";
import img from "../../assest/products/airpodes/aird.webp";
import imgTow from "../../assest/products/airpodes/img2.webp";
import imgThre from "../../assest/products/airpodes/img3.webp";
import { FaStar } from "react-icons/fa";
import EarpodCategory from "../../components/index/earpodCategory/EarpodCategory";

const ProductDeteals = () => {
  const [product, setPrroduct] = useState([]);
  const [loding, setLoding] = useState(false);
  const params = useParams();
  const productImageListLoading = new Array(4).fill(null);
  const fetchProductDeteals = async () => {
    const res = await fetch("/api/product-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: params.id }),
    });
    const data = await res.json();

    setPrroduct(data.data);
  };
  console.log(product);
  useEffect(() => {
    setLoding(true);
    fetchProductDeteals();
    setLoding(false);
  }, [params]);
  return (
    <>
      <NavBar />
      <div className=" pb-24 container mx-auto pt-24">
        <div className=" min-h-[200px] flex flex-col lg:flex-row gap-2">
          <section className=" h-96 flex flex-col  gap-4">
            <div className=" rounded-2xl w-[300px] h-[300px] lg:h-96 lg:w-96 bg-slate-100 relative ">
              <img
                src={img}
                className=" w-full h-full object-scale-down mix-blend-multiply"
                alt=""
              />
            </div>
            <div className="flex flex-col h-full">
              {loding ? (
                <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                  {productImageListLoading.map((el, index) => {
                    return (
                      <div
                        className="h-20 w-20 bg-slate-200 rounded animate-pulse"
                        key={"loadingImage" + index}
                      ></div>
                    );
                  })}
                </div>
              ) : (
                <div className=" flex flex-col gap-2 lg:flex-row h-full overflow-scroll scrollbar-none">
                  <div className="flex flex-col h-20 w-20 rounded bg-slate-200 p-1">
                    <img
                      src={img}
                      alt=""
                      className=" w-full h-full object-scale-down
                    mix-blend-multiply cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col h-20 w-20 rounded bg-slate-200 p-1">
                    <img
                      src={imgTow}
                      alt=""
                      className=" w-full h-full object-scale-down
                    mix-blend-multiply cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col h-20 w-20 rounded bg-slate-200 p-1">
                    <img
                      src={img}
                      alt=""
                      className=" w-full h-full object-scale-down
                    mix-blend-multiply cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col h-20 w-20 rounded bg-slate-200 p-1">
                    <img
                      src={imgThre}
                      alt=""
                      className=" w-full h-full object-scale-down
                    mix-blend-multiply cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* product detaels */}
          <section className="pl-3 flex flex-col gap-3">
            <p className="p-3 rounded-full bg-red-200 text-red-700 w-20">
              {product?.brandName}
            </p>
            <h2 className=" text-2xl font-medium">{product?.productName}</h2>
            <p className=" text-slate-400">{product?.category}</p>

            <div className=" flex gap-2 text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className=" flex  gap-3">
              <p className=" font-medium text-2xl text-red-600">
                ${product?.sellingPrice}
              </p>
              <p className=" font-medium text-2xl line-through text-slate-400">
                ${product?.price}
              </p>
            </div>
            <div className=" flex gap-3 pt-2">
              <button className="border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white">
                buy
              </button>
              <button className="border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-red-600 hover:text-red-600 hover:bg-white">
                add to card
              </button>
            </div>
            <div>
              <p></p>
            </div>
          </section>
        </div>
      </div>

      {product?.category && (
        <EarpodCategory category={product.category} header={""} />
      )}
    </>
  );
};

export default ProductDeteals;
