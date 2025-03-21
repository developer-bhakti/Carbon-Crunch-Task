import React from "react";

const Featured = () => {
  return (
    <div className="bg-[#222222] py-20 px-10">
      <div className="flex items-center justify-around gap-5">
        <div className="bg-[#C4C4C4] w-[610px] h-[802px] "></div>
        <div className="flex flex-col items-center justify-center -ml-72 gap-5">
          <div className="bg-[#28B30E] rounded-xl py-4 px-3 max-w-[26rem] -mb-16 z-50">
            <span className="font-bold text-7xl tracking-wide">3X</span>
            <p className="font-medium text-[#2D2D2D] text-3xl">
              ESG high performers deliver a higher total shareholder return
            </p>
          </div>

          <div className="bg-[#3A3A3A] text-white rounded-xl py-4 px-3 -ml-[30rem] z-10 max-w-[36rem]">
            <span className="font-bold text-7xl tracking-wide">98%</span>
            <p className="font-medium text-white text-3xl">
              of CEOs agree sustainability is their responsibility
            </p>
          </div>

          <div className="text-right bg-[#2D2D2D] text-white rounded-xl -mt-16 z-0 py-4 px-3 max-w-[28rem]">
            <span className="font-bold text-7xl tracking-wide">18%</span>
            <p className="font-medium text-white text-3xl">
              of companies are cutting emissions fast enough to reach net zero
              by 2050
            </p>
          </div>

          <div className="text-[#239C0C] bg-white rounded-xl py-4 px-3 -ml-[40rem] max-w-[32rem] -mt-16">
            <span className="font-bold text-7xl tracking-wide">37%</span>
            <p className="font-medium text-3xl">
              of the world's largest companies have a public net zero target.
              Nearly all are off track
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
