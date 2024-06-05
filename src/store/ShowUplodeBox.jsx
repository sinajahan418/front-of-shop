import { create } from "zustand";


export const useUplodeBox = create((set)=> ({
    openUpdeateProduc : false,
    setOpenUpdeateProduc: (openUpdeateProduc)=> set({openUpdeateProduc}),
    productDeteals : [],
    setProductDeteals: (productDeteals) => set ({productDeteals})
}))

