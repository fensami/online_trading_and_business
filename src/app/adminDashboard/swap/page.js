import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Swap = () => {
  return (
    <div className='md:w-full'>
      <div className='mt-16 card bg-[#171f2a] py-8 w-72 md:w-3/4 mx-auto'>
        <h1 className='text-2xl text-center mb-4'>Swap</h1>



        <>
          <div className="join md:w-2/4 mx-auto mb-4 md:mb-6">

            <select className="select select-bordered bg-[#131720] join-item w-28 md:w-36">

              <option disabled selected>Filter</option>
              <option>Bitcoin</option>
              <option>ETHEREUM</option>
              <option>TETHER USD</option>
              <option>BINANCE COIN</option>
              <option>USD COIN</option>
              <option>CARDANO</option>
              <option>DOGE COIN</option>
            </select>
            <div>
              <div >
                <input className="input bg-[#131720] input-bordered text-end join-item md:w-full w-44" placeholder="$0.00" />
                <p className='text-green-500 text-right'>= $0.00</p>
              </div>
            </div>

          </div>
        </>









        <div className='flex items-center md:ml-32 text-orange-400'>
        </div>
        <div className="join md:w-1/2 mx-auto">
          <select className="select select-bordered bg-[#131720] join-item w-28 md:w-36">
            <option disabled selected>Filter</option>
            <option>Bitcoin</option>
            <option>ETHEREUM</option>
            <option>TETHER USD</option>
            <option>BINANCE COIN</option>
            <option>USD COIN</option>
            <option>CARDANO</option>
            <option>DOGE COIN</option>
          </select>
          <div>
            <div>
              <input className="input bg-[#131720] input-bordered text-end join-item md:w-full w-44" placeholder="$0.00" />
              <p className='text-green-500 text-right'>= $0.00</p>
            </div>
          </div>

        </div>



        <p className='w-[70%] mt-5 mx-auto'><hr /></p>

        <div className='flex items-center justify-around mt-4'>
          <p>Min.Received</p>
          <p>- -</p>
        </div>
        <div className='flex mt-2 items-center justify-around'>
          <p>Rate by coin</p>
          <p>- -</p>
        </div>
        <div className='flex mt-2 items-center justify-around'>
          <p>Offered coin</p>
          <p>- -</p>
        </div>
        <div className='flex mt-2 items-center justify-around'>
          <p>Price Slippage</p>
          <p>1%</p>
        </div>
        <div className='flex mt-2 items-center justify-around'>
          <p>Network Fee</p>
          <p>- -</p>
        </div>
        <div className='flex mt-2 items-center justify-around'>
          <p>Criptic Fee</p>
          <p>0.20%</p>
        </div>
        <button className="btn btn-secondary w-[70%] mx-auto my-4 ">Swap</button>
      </div>
    </div>
  );
};

export default Swap;