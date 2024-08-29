import { React, useContext } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { querycategoriesContext } from "../Component/context";

const Shoe = () => {
  const {shoeitems,query} = useContext(querycategoriesContext)

  const queryitems = (data) =>{
    return data.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  }
  
  const filteredItems = shoeitems.filter(item => queryitems(item.title))

  return (  
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,0.5fr))] gap-3 " >
      {filteredItems.length > 0 ? (
              filteredItems.map((items, index) => (
                <div key={index} className="border p-5 flex flex-col gap-y-3 h-80 hover:shadow-lg">
                  <div className="h-36 flex align-middle items-center">  <Image
                      className="object-contain h-full" 
                      src={items.img} 
                      width={200}   
                      height={0}
                      alt={`Picture of ${items.title}`}
                      
                    /></div>
                  <div className="font-bold mt-4"> {items.title}</div>
                  <div className="flex items-center"><FaStar style={{color: '#faa314'}} size={11}/><FaStar style={{color: '#faa314'}} size={11}/><FaStar style={{color: '#faa314'}} size={11}/><FaStar style={{color: '#faa314'}} size={11}/>
                  <p className="text-xs pl-2">{items.reviews}</p></div>
                  <div className="flex justify-between items-center">
                    <div className="flex"><del>{items.prevPrice}</del><p className="pl-1">{items.newPrice}</p></div>
                    <GiShoppingBag size={15}/>
                  </div>
                </div>
              ))
      ) : (
      <div className="w-96 flex"> No item match &ldquo;{query}&ldquo;</div>
      )}

    </div>
  );
};

export default Shoe;
