'use client'
import React,{createContext,useState} from 'react'
import item from "@/app/Component/db/data";

export const querycategoriesContext = createContext();


const Filterpage = ({children}) => {
    const [query,setQuery] = useState("");
    const [shoeitems,setShoeitems] = useState(item)
  return (
    <querycategoriesContext.Provider value={{query,setQuery,shoeitems,setShoeitems,item}}>
       {children}
    </querycategoriesContext.Provider>

  )
}

export default Filterpage



