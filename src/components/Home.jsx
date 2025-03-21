import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="custom-bg h-screen  z-10">
      <Navbar />
      <div className="h-[80vh] flex flex-col items-center justify-center z-20 text-center">
        <span className="bg-[#070708] text-[#AFB0B6] rounded-[100px] py-[8px] pr-[20px] pb-[8px] my-2 border">
          👋 Let’s Save our Environment
        </span>
        <h1 className="text-7xl font-bold tracking-[-0.05em] mb-4 max-w-6xl">
          Streamline our Sustainability Reporting With{" "}
          <span className="text-[#28B30E]">CARBON CRUNCH</span>
        </h1>
        <p className="text-[#2D2D2D] text-[16px] font-medium">
          <span className="text-[#28B30E]">95%</span> Accurate Carbon
          Calculations Trusted by Industry Leaders
        </p>
        <div className="flex items-center justify-center gap-[16px] mt-8">
          <button className="bg-white text-[#28B30E] rounded-[6px] py-[14px] px-[22px] font-bold hover:bg-[#28B30E] hover:text-black  transition-all 3s">
            Free Calculator
          </button>
          <button className="bg-[#28B30E] text-black font-bold rounded-[6px] py-[14px] px-[22px] hover:bg-white hover:text-[#28B30E]  transition-all 3s">
            Book Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
