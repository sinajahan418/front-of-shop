import React, { useState } from 'react';
import UplodeProductBox from '../../../components/tempelat/p-admin/uplodeProductBox/UplodeProductBox';

const Products = () => {
  const [openUplodeBox , setOpenUplodeBox] = useState(false)
  return (
    <div className=' w-[70%] ml-[20rem] mt-[-22rem]'>
      <div className=' bg-white flex justify-between items-center p-3 '>
        <h1>All products</h1>
        <button onClick={()=> setOpenUplodeBox(true)} className=' bg-slate-300 rounded-3xl p-2 hover:bg-slate-400'>uplode products</button>
      </div>
      {
        openUplodeBox && <UplodeProductBox onClose={()=> setOpenUplodeBox(false)}/>
      }
      
    </div>
  );
}

export default Products;
