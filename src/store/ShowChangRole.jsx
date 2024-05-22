import { create } from "zustand";

export const useShowRoleBox = create((set)=> ({
showRoleBox: false,
setShowRoleBox : (showRoleBox)=> set({showRoleBox}),
userID: [],
setUserID: (userID)=> set({userID})

}))