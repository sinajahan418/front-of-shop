import { create } from "zustand";

export const useAuthUser = create((set) => ({
  

  authUser: JSON.parse(localStorage.getItem("user")),
  setAuthUser: (authUser) => set({ authUser })
}));
