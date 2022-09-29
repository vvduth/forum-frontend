import React from "react";
import { categories } from "../data/Dummy_data";
const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <a href="/">
            <span className="cursor-pointer font-bold text-4xl">PukeDuke</span>
          </a>
        </div>
        <div className="hidden md:float-left md:contents">
            {categories.map((category:any, index: number)=>(
                <a key={index}>
                    <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                        {category}
                    </span>
                </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
