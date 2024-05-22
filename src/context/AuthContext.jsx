import { createContext } from "react";

 export  const Context = createContext(null)

 export function ContextProvaider({children}){

   return (
    <Context.Provider value={{}}>
        {children}
    </Context.Provider>
   )
 }

