import React from "react";
import NavBar from "../../components/index/NavBar/NavBar";
import productCategory from "../../hellpers/productCategory";

const CategoryProduct = () => {
    const handelCheck = (e)=> {
         const { name,value , checked} = e.target
         console.log(value);
    }
  return (
    <>
      <NavBar />
      <div className=" container mx-auto pt-24"></div>
      {/* destop version */}
      <div className=" flex grid-cols-[200px , 1fr]">
        {/* left side */}
        <div className=" p-2  bg-white w-[30%] min-h-[cals(100vh-120px)]">
          <h2 className="pl-14 font-medium text-slate-500 text-center bg-slate-100 rounded-3xl">
            {" "}
            SORT by
          </h2>
          <form className=" pl-14 gap-4 bg-gray-200 rounded-xl">
            <div className=" gap-5">
              <input className="m-4" type="radio" />
              <label htmlFor="">
                <span>low-to-heithg</span>
              </label>
            </div>
            <div>
              <input className="m-4" type="radio" />
              <label htmlFor="">
                <span>low-to-heithg</span>
              </label>
            </div>
          </form>
          <br />
          <form className=" pl-14 gap-4 bg-gray-200 rounded-xl">
            {productCategory.map((catrgoty, index) => {
              return <div>
                <input value={catrgoty?.value} onChange={handelCheck} className="mr-4 pt-3" type="checkbox"/>
                <label htmlFor="">{catrgoty?.label}</label>
              </div>;
            })}
          </form>
        </div>
        <div className="">rith side</div>
      </div>
    </>
  );
};

export default CategoryProduct;
