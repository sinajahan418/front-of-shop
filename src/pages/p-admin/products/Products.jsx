import React, { useEffect, useState } from 'react';
import UplodeProductBox from '../../../components/tempelat/p-admin/uplodeProductBox/UplodeProductBox';
import Product from '../../../components/module/products/product';
import UpdeateProductBox from '../../../components/tempelat/p-admin/updeateProductBox/UpdeateProductBox';
import { useUplodeBox } from '../../../store/ShowUplodeBox';

const Products = () => {
  const {openUpdeateProduc , setOpenUpdeateProduc} = useUplodeBox()
  const [openUplodeBox , setOpenUplodeBox] = useState(false)
  const [allProducts, setAllProducts] = useState([])
  useEffect(()=> {
    const getAllProducts = async()=> {
      const res = await fetch("/api/get-product")
      const data = await res.json()
      setAllProducts(data.data)
    }
    getAllProducts()
  }, [])
  return (
    <div className=' w-[70%] ml-[20rem] mt-[-22rem]'>
      <div className=' bg-white flex justify-between items-center p-3 '>
        <h1>All products</h1>
        <button onClick={()=> setOpenUplodeBox(true)} className=' bg-slate-300 rounded-3xl p-2 hover:bg-slate-400'>uplode products</button>
      </div>
      {
        openUplodeBox && <UplodeProductBox onClose={()=> setOpenUplodeBox(false)}/>
      }
      <div className='flex brand gap-4'>
         {
          allProducts?.map(product => (<Product {...product}/>))
         }
      </div>
      {openUpdeateProduc && (
          <UpdeateProductBox
           
            onClose={() => setOpenUpdeateProduc(false)}
          />
        )}
    </div>
  );
}

export default Products;
