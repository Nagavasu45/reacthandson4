import { createContext, useState } from "react";
import B from "./B";
export const Store=createContext();

function A(){
    
    const [data,setState]=useState({name:"naga",id:7})
    return(
        <>
        
        <Store.Provider value={{data,setState}}>
           
        <B />

        </Store.Provider>

        
        </>
    )

}
export default A