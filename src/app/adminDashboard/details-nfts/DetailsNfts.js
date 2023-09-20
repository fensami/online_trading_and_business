import React from "react";
import down from "../../../../public/hand.png";
import Image from "next/image";

const DetailsNfts = () => {
  return (
    <div className="lg:flex w-full md:mt-4 mt-4 px-8">
      <article className="lg:w-2/5 w-full mt-4  ">
        <Image
          height={400}
          className="rounded-md"
          width={800}
          src={down}
          alt=""
        ></Image>
      </article>

      <article className="lg:w-3/5 md:px-8 px-2 justify-start text-left items-center ">
        <div className="md:flex md:justify-between items-center  ">
          <div className="flex-1 mt-4 mb-8 ">
            <h1 className="md:text-2xl text-[21px] font-semibold md:font-bold w-full  flex justify-between">
              <p className="text-left"> Flow Punk Gallery #303</p>
              <label htmlFor="my_modal_6" className="btn btn-sm ">
                ...
              </label>
            </h1>
            <p className="my-2">Minted on Jan 26, 2022</p>
          </div>

          <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <p className="  hover:bg-slate-600 p-2 w-52 rounded-lg cursor-pointer">
                  <span> PLEASE FLOR</span>
                  <span className="px-3 mx-2 py-1 bg-red-500 rounded-md">
                    NEW
                  </span>
                </p>
                <p className="  hover:bg-slate-600 p-2 w-52 rounded-lg cursor-pointer">
                  REPORT
                </p>
                <hr />
                <p className="  hover:bg-slate-600 p-2 w-52 rounded-lg cursor-pointer">
                  NEW BID
                </p>
                <p className="  hover:bg-slate-600 p-2 w-52 rounded-lg cursor-pointer">
                  REFRESH METADATA
                </p>
                <p className="  hover:bg-slate-600 p-2 w-52 rounded-lg cursor-pointer">
                  OPEN ORIGINAL
                </p>
                <div className="modal-action">
                  <label htmlFor="my_modal_6" className="btn">
                    Close!
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between  grid-cols-1 ">
          <div>
            <p className="my-1 font-semibold text-[14px]">CREATE BY</p>
            <div className="flex bg-slate-800 px-5 md:py-3 py-1 rounded-3xl items-center gap-2 w-full">
              <Image
                width={24}
                height={24}
                className="rounded-full"
                src="https://i.ibb.co/sVdVFpQ/person.jpg"
                alt=""
              ></Image>
              <p className="">@Cameronwilliams</p>
            </div>
          </div>
          <div>
            <p className="my-1 font-semibold text-[14px]">COLLECTION</p>
            <div className="flex bg-slate-800 px-5  md:py-3 py-1 rounded-full items-center gap-2">
              <Image
                className="rounded-full"
                width={28}
                height={100}
                src="https://i.ibb.co/sVdVFpQ/person.jpg"
                alt=""
              ></Image>
              <p className="">Criptic</p>
            </div>
          </div>
        </div>

        <select className="select  select-sm w-full max-w-2xl my-4  ">
          <option>Details :</option>
          <option>Bid</option>
          <option>History</option>
        </select>
        <p className="text-1xl font-semibold">Descriptions</p>
        <p className="w-full px-5 text-mono">
          Fisherian Runaways, Child of #48 Bat Veil & #42 Screw Nose. This
          mushroom is the result of the cross-breeding of two original one of a
          kind generative mushrooms donated back to the Fisherian Runaways
          project their generous owner.
        </p>
        <h1 className="mt-5 text-1xl font-semibold">OWNER</h1>
        <div className="flex bg-slate-800 px-4 py-1 w-64 rounded-xl items-center gap-2">
          <Image
            className="h-6 rounded-full w-6"
            width={24}
            height={24}
            src="https://i.ibb.co/sVdVFpQ/person.jpg"
            alt=""
          ></Image>
          <p className="">@Cameronwilliams</p>
        </div>
        <h1 className="mt-5 text-1xl font-semibold">BLOCK CHAIN</h1>
        <div className="flex bg-slate-800 px-4 py-1 w-44 rounded-xl items-center gap-2">
          <Image
            className="h-6 rounded-full w-6"
            width={24}
            height={24}
            src="https://i.ibb.co/wwvDH9X/Bitcoin.png"
            alt=""
          ></Image>
          <p className="">Bitcoin</p>
        </div>
        <div className="flex mt-2 bg-slate-800 px-4 py-1 w-44 rounded-xl items-center gap-2">
          <Image
            className="h-6 rounded-full w-6"
            width={24}
            height={24}
            src="https://i.ibb.co/q7ZN979/binance.png"
            alt=""
          ></Image>
          <p className="">Ethereum</p>
        </div>
        <hr className="my-5" />
        <div className=" flex justify-between items-center">
          <div>
            <div className="flex items-center">
              <p>CURRENT BID</p>
              <p className="mx-2 text-gray-400">@willia...</p>
            </div>
            <h1 className="md:text-3xl font-semibold">1.01 ETH</h1>
          </div>
          <div>
            <h1>AUCTION ENDS IN</h1>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col">
                <span className="countdown font-mono md:text-3xl">
                  <span style={{ "--value": 10 }}>H</span>
                </span>
                hours
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono md:text-3xl">
                  <span style={{ "--value": 24 }}>M</span>
                </span>
                min
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono md:text-3xl">
                  <span style={{ "--value": 44 }}>S</span>
                </span>
                sec
              </div>
            </div>
          </div>
        </div>
        <div className="flex my-6 gap-6 justify-center items-center">
          <button className="btn-style bg-black text-white">PLACE A BID</button>
          <button className="btn-style bg-gray-700  ">SHARE</button>
        </div>
      </article>
    </div>
  );
};

export default DetailsNfts;
