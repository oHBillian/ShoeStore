"use client";
import React, { useContext, useState } from "react";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { querycategoriesContext } from "../../context";
import { ChevronRight } from "lucide-react";
const Categories = () => {
  
  const [isopen, setIsopen] = useState(false);
  // Condition CSS
  const [isselectedcss, setIsselectedcss] = useState("");

  const { item, setQuery, setShoeitems } = useContext(querycategoriesContext);
  const categories = [...new Set(item.map((item) => item.category))];
  const colors = [...new Set(item.map((item) => item.color))];

  const haddleOpen = (menutype) => {
    switch (menutype) {
      case "categoriesmenu":
        return setIsopen(!isopen);
    }
  };

  const filteredItems = ( filter , value) => {
    setQuery("")
    setIsselectedcss(value)
    const selectedfilter = item.filter((newfilter) => newfilter[filter] === value)
    setShoeitems(selectedfilter)
  }

  return (
    <div className="flex flex-col w-44 fixed z-10">
      <div>
        <div>
          <div className="border-t-2 border-b-2 font-semibold py-3 pl-2 mb-1 flex justify-between">
            <p>Categories</p>
            <button onClick={() => haddleOpen("categoriesmenu")}>
              {isopen ? (
                <MdKeyboardArrowUp size={23} />
              ) : (
                <MdKeyboardArrowDown
                  size={23}
                  className={isopen ? "rotate-180 duration-200" : ""}
                />
              )}
            </button>
          </div>

          <div
            className={`${
              isopen ? "max-h-96 opacity-100" : "hidden"
            }`}
          >
            <div
              className={`flex items-center py-3 ml-5 cursor-pointer w-fit 
              ${isselectedcss === "" ? "font-bold" : ""}`}
              onClick={() => {setShoeitems(item); setIsselectedcss("");}}
            >
              {isselectedcss === "" && <ChevronRight size={17} />}
              All
            </div>
            {categories.map((cat, index) => (
              <div
                className={`flex items-center py-3 ml-5 cursor-pointer w-fit ${
                  isselectedcss === cat ? "font-bold" : ""
                }`}
                key={index}
                onClick={() => filteredItems("category", cat)}
              >
                {isselectedcss === cat && <ChevronRight size={17} />}
                {cat}
              </div>
            ))}
                      <hr className="w-full"/>
          </div>

        </div>

      </div>

      <div className="border-b-2 pl-2">
        <div className="font-semibold py-3 flex justify-between">
          <p>Color</p>
        </div>
        <div className="mb-4">
          {colors.map((c,index) => (
            <button style={{backgroundColor: c,width: '1.5rem',
              height: '1.5rem',
              border: '2px solid black',
              borderRadius: '0.375rem',
              marginRight: '0.25rem'}} 
              key={index} 
              onClick={() => filteredItems("color", c)}>

              </button>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Categories;
