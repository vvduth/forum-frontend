import React, { useState } from "react";
import { categories } from "../data/Dummy_data";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import menu from "../assets/menu.svg";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <a href="/">
            <span className="cursor-pointer font-bold text-4xl">PukeDuke</span>
          </a>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category: any, index: number) => (
            <a key={index}>
              <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                {category} 
              </span>
            </a>
          ))}
          <button className="md:float-right mt-2 border-blue-300 bg-red-800 p-2 text-white rounded-md align-middle ml-4 font-semibold cursor-pointer">Login</button>
        </div>
        <div>
          <button
            className="md:hidden float-right"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? (
              <AiOutlineMenu className="w-[28px] h-[28px]" />
            ) : (
              <AiOutlineCloseCircle className="w-[28px] h-[28px]" />
            )}
          </button>
          <br />
          <div className={`${!toggle ? "flex" : "hidden"}`}>
            <ul className="flex flex-col justify-end flex-1 items-end">
              {categories.map((category: string, i: number) => (
                <li
                  key={i}
                  className="border-b shadow-md border-blue-500 p-2 rounded-full"
                >
                  {category}
                </li>
              ))}
              <li className="border-b shadow-md bg-lime-800 text-2xl font-bold text-white mt-2 border-blue-500 p-2 rounded-full">
                Login
              </li>
              <li className="border-b shadow-md bg-lime-800 text-2xl font-bold text-white mt-2 border-blue-500 p-2 rounded-full">
                Sign up{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
