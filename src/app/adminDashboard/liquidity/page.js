import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const SelectInput = ({ placeholder }) => (
  <div>
    <input
      className="input bg-[#131720] md:h-12 input-bordered text-end join-item w-full outline-none "
      placeholder={placeholder}
    />
    <p className="text-green-500 text-right">= $0.00</p>
  </div>
);

const Liquidity = () => {
  return (
    <div className="w-full md:flex gap-4  px-8 pt-6">
      <div className=" md:w-[30%] card bg-[#171f2a] py-8 mx-auto order-2 md:my-0 my-4 ">
        <Image
          width={600}
          height={600}
          src="https://i.ibb.co/C8qzDDF/top-view-shopping-cart-filled-with-money-23-2148525281-removebg-preview.png"
          alt="image"
        />
        <p className="mx-6 text-gray-400">
          {" "}
          liquidity sorting is a fundamental practice in financial markets,
          allowing traders and investors to make informed decisions about buying
          and selling assets.
        </p>
      </div>
      <div className=" card bg-[#171f2a] py-8  md:w-[70%]  mx-auto px-6">
        <h1 className="text-2xl text-center mb-4">LIQUIDITY</h1>
        <div className="flex items-center md:ml-32 gap-2 text-orange-400">
          <h1>From</h1>
          <FaArrowRight />
        </div>
        <div className="join md:w-[70%]  mx-auto mb-4 md:mb-3">
          <select className="select select-bordered bg-[#131720] outline-none md:h-12 join-item ">
            <option disabled selected>
              Filter
            </option>
            <option>Bitcoin</option>
            <option>ETHEREUM</option>
            <option>TETHER USD</option>
            <option>BINANCE COIN</option>
            <option>USD COIN</option>
            <option>CARDANO</option>
            <option>DOGE COIN</option>
          </select>
          <SelectInput placeholder="$0.00" />
        </div>

        <div className="flex items-center gap-2 md:ml-32 text-orange-400">
          <h1>To</h1>
          <FaArrowRight />
        </div>
        <div className="join w-[70%] mx-auto ">
          <select className="select select-bordered bg-[#131720] md:h-12 outline-none border join-item ">
            <option disabled selected>
              Filter
            </option>
            <option>Bitcoin</option>
            <option>ETHEREUM</option>
            <option>TETHER USD</option>
            <option>BINANCE COIN</option>
            <option>USD COIN</option>
            <option>CARDANO</option>
            <option>DOGE COIN</option>
          </select>
          <SelectInput placeholder="$0.00" />
        </div>
        <hr />
        <div className="text-left lg:w-[70%] mx-auto">
          <div className="flex items-center justify-between mt-4">
            <p>13.77 eth per btc</p>
            <p>0%</p>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p>0.072631 Btc per ETH</p>
            <p>Share of pull</p>
          </div>

          <div className="flex items-center justify-center  gap-2 md:gap-12 my-6">
            <button className="btn-style bg-pink-600 md:w-40 hover:bg-slate-500 duration-500 text-white">
              APPROVE BTC
            </button>
            <button className="btn-style bg-pink-600 duration-500 hover:bg-slate-500 text-white  md:w-40">
              APPROVE ETH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liquidity;
