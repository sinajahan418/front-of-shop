import { create } from "zustand";

export const useProductCount = create((set)=> ({
   count : 0,
   setCount : ()=> set((state)=> ({count: state.count + 1}))
}))