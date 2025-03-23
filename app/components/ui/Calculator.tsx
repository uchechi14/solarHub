import React from "react";

const Calculator = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="w-[90%]">
        <div className="flex flex-col items-center pb-8">
          <p className="text-[#101828] font-sora font-bold text-3xl">
            Investment Calculator
          </p>
          <p className="text-[#475467] ">
            Calculate your potential returns from solar investment
          </p>
        </div>
        <div className="gap-5 grid md:grid-cols-2 grid-cols-1">
          <form className="bg-[#F3F4F5] py-6 px-7 rounded-2xl w-full flex flex-col gap-5">
            <div>
              <p className="text-[#A4A5A9] font-sora">
                Investment Amount (NGN)
              </p>
              <input
                className="w-full px-2.5 py-2.5 rounded-sm  border outline-none border-[#D9D9DA]"
                type="text"
                placeholder="Enter amount"
              />
            </div>
            <div>
              <p className="text-[#A4A5A9] font-sora">
                Investment Period (Years)
              </p>
              <input
                className="w-full px-2.5 py-2.5 rounded-sm  border outline-none border-[#D9D9DA]"
                type="text"
                placeholder="Enter amount"
              />
            </div>
            <div>
              <p className="text-[#A4A5A9] font-sora">
                Expected Annual Return (Years)
              </p>
              <input
                className="w-full px-2.5 py-2.5 rounded-sm  border outline-none border-[#D9D9DA]"
                type="text"
                placeholder="Enter amount"
              />
            </div>
            <button className="bg-[#101828] text-white w-full py-2.5 rounded-[8px]">
              Calculate
            </button>
          </form>
          <div className="text-[#101828] w-full bg-[#F3F4F5] px-6 rounded-2xl flex flex-col items-center justify-center gap-2 h-[360px]">
            <p className="font-sora text-xl">Projected Returns</p>
            <p className="text-2xl font-bold font-sora">NGN 30,0000,000</p>
            <p className="">Total Value After 5 Years</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
