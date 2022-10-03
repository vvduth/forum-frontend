import React, { useState } from "react";
import { categories } from "../data/Dummy_data";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle ,AiOutlineLogin } from "react-icons/ai";
import {SiGnuprivacyguard} from 'react-icons/si'
import menu from "../assets/menu.svg";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <a href="/">
            <span className="cursor-pointer text-white font-bold text-4xl">
              PukeDuke
            </span>
          </a>
          <button
            className="md:hidden float-right m-2"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? (
              <AiOutlineCloseCircle className="w-[28px] h-[28px] text-white" />
            ) : (
              <AiOutlineMenu className="w-[28px] h-[28px] text-white" />
            )}
          </button>
          <br />
        </div>
        <div className="hidden md:float-left md:contents text-white">
          <a href="/login">
            <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer border-b border-white">
               Login
            </span>
          </a>
          <a>
            <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer border-b border-white">
              Sign up
            </span>
          </a>
          {categories.map((category: any, index: number) => (
            <a key={index}>
              <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                {category}
              </span>
            </a>
          ))}
        </div>

        <div>
          <div className={`${toggle ? "flex" : "hidden"} md:hidden`}>
            <ul className="flex flex-col justify-end flex-1 items-end">
              {categories.map((category: string, i: number) => (
                <a key={i}>
                  <span className="text-white font-semibold border-b border-grey-200 text-xl m-2">
                    {category}
                  </span>
                </a>
              ))}
              <div className="flex m-2">
              <a href="/login">
                <span className="text-white font-semibold text-3xl cursor-pointer">
                   <AiOutlineLogin className="m-2"/> 
                </span>
              </a>
              <a>
                <span className="text-white font-semibold text-3xl cursor-pointer">
                  <SiGnuprivacyguard className="m-2" /> 
                </span> 
              </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
