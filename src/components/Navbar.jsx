import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-16 py-10">
      <div className="flex justify-center items-center">
        <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
        <span className="font-bold text-xl">Carboncrunch</span>
      </div>
      <div className="flex justify-between items-center gap-10 bg-white py-[16px] px-[24px] rounded-[16px]">
        <a href="#Home">Home</a>
        <a href="#Services">Services</a>
        <a href="#Blog">Blog</a>
        <a href="#AboutUs">About Us</a>
        <a href="#Contact">Contact</a>
      </div>
      <div className="flex justify-center items-center gap-5">
        <button className=" py-[10px] px-[22px] bg-[#D6FFD0] text-green-600 font-medium rounded-[6px] hover:bg-[#28B30E] hover:text-black  transition-all 3s">
          Login
        </button>
        <button className=" py-[10px] px-[22px] bg-[#28B30E] text-black font-medium rounded-[6px] hover:bg-[#D6FFD0] hover:text-[#28B30E]  transition-all 3s">
          Book Demo
        </button>
      </div>
    </div>
  );
};

export default Navbar;
