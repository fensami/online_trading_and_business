import React from "react";
import Marquee from "react-fast-marquee";
import bitcoin from "../../../public/Bitcoin.png";
import dogecoin from "../../../public/dugecoin.png";
import binance from "../../../public/binance.png";
import ethereum from "../../../public/ethereum.jpg";
import litecoin from "../../../public/litecoin.jpg";

import Image from "next/image";

const MarqueeCard = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Marquee
        className=" bg-[#171f2a] my-12 border border-slate-700 h-28"
        pauseOnHover={true}
      >
        <div className="ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700">
          <div className="flex items-center justify-evenly mb-3">
            <Image
              className="h-6 w-6 rounded-full"
              src={bitcoin}
              alt=""
            ></Image>
            <h1>Bitcoin</h1>
          </div>
          <p>4543.0799</p>
          <p className="text-orange-500">+0947.0087(-887%)</p>
        </div>
        <div className="ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700">
          <div className="flex items-center justify-evenly mb-3">
            <Image
              className="h-6 w-6 rounded-full"
              src={dogecoin}
              alt=""
            ></Image>
            <h1>Dogecoin</h1>
          </div>
          <p>00983.0709</p>
          <p className="text-orange-500">+0947.0087(-0657%)</p>
        </div>
        <div className="ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700">
          <div className="flex items-center justify-evenly mb-3">
            <Image
              className="h-6 w-6 rounded-full"
              src={binance}
              alt=""
            ></Image>
            <h1>Binance</h1>
          </div>
          <p>9874.98634</p>
          <p className="text-orange-500">+0947.0087(-0342%)</p>
        </div>
        <div className="ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700">
          <div className="flex items-center justify-evenly mb-3">
            <Image
              className="h-6 w-6 rounded-full"
              src={ethereum}
              alt=""
            ></Image>
            <h1>Ethereum</h1>
          </div>
          <p>8609.2324</p>
          <p className="text-orange-500">+0947.0087(-7309%)</p>
        </div>
        <div className="ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700">
          <div className="flex items-center justify-evenly mb-3">
            <Image
              className="h-6 w-6 rounded-full"
              src={bitcoin}
              alt=""
            ></Image>
            <h1>Bitcoin</h1>
          </div>
          <p>4543.0799</p>
          <p className="text-orange-500">+0947.0087(-887%)</p>
        </div>
        <div className="ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700">
          <div className="flex items-center justify-evenly mb-3">
            <Image
              className="h-6 w-6 rounded-full"
              src={litecoin}
              alt=""
            ></Image>
            <h1>Litecoin</h1>
          </div>
          <p>00983.0709</p>
          <p className="text-orange-500">+0947.0087(-0657%)</p>
        </div>
        <div className="ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700">
          <div className="flex items-center justify-evenly mb-3">
            <Image
              className="h-6 w-6 rounded-full"
              src={binance}
              alt=""
            ></Image>
            <h1>Binance</h1>
          </div>
          <p>9874.98634</p>
          <p className="text-orange-500">+0947.0087(-0342%)</p>
        </div>
        <div className="ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700">
          <div className="flex items-center justify-evenly mb-3">
            <Image
              className="h-6 w-6 rounded-full"
              src={ethereum}
              alt=""
            ></Image>
            <h1>Ethereum</h1>
          </div>
          <p>8609.2324</p>
          <p className="text-orange-500">+0947.0087(-7309%)</p>
        </div>
        <div className="ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700">
          <div className="flex items-center justify-evenly mb-3">
            <Image
              className="h-6 w-6 rounded-full"
              src={binance}
              alt=""
            ></Image>
            <h1>Binance</h1>
          </div>
          <p>9874.98634</p>
          <p className="text-orange-500">+0947.0087(-0342%)</p>
        </div>
        <div className="ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700">
          <div className="flex items-center justify-evenly mb-3">
            <Image
              className="h-6 w-6 rounded-full"
              src={litecoin}
              alt=""
            ></Image>
            <h1>Litecoin</h1>
          </div>
          <p>00983.0709</p>
          <p className="text-orange-500">+0947.0087(-0657%)</p>
        </div>
        <div className="ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700">
          <div className="flex items-center justify-evenly mb-3">
            <Image
              className="h-6 w-6 rounded-full"
              src={dogecoin}
              alt=""
            ></Image>
            <h1>Dogecoin</h1>
          </div>
          <p>00983.0709</p>
          <p className="text-orange-500">+0947.0087(-0657%)</p>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeCard;
