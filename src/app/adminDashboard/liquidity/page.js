import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Liquidity = () => {
    return (
        <div>
          <div className='md:w-full'>
              <div className='mt-16 card bg-[#171f2a] py-8 w-72 md:w-[70%] mx-auto'>
                <h1 className='text-2xl text-center mb-4'>LIQUIDITY</h1>
            <div className='flex items-center md:ml-32 text-orange-400'>
            <h1>From</h1>
            <FaArrowRight></FaArrowRight>
            </div>
         <div className="join md:w-[60%] mx-auto mb-4 md:mb-6">
  
  <select className="select select-bordered  md:h-20 join-item w-28 md:w-36">
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
      <input className="input  md:h-20 input-bordered text-end join-item md:w-full w-44" placeholder="$0.00"/>
      <p className='text-green-500 text-right'>= $0.00</p>
    </div>
  </div>
   
         </div>
              
         <div className='flex items-center md:ml-32 text-orange-400'>
            <h1>To</h1>
                 <FaArrowRight></FaArrowRight>
            </div>
         <div className="join md:w-[60%] mx-auto">
  <select className="select select-bordered  md:h-20 join-item w-28 md:w-36">
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
      <input className="input  md:h-20 input-bordered text-end join-item md:w-full w-44" placeholder="$0.00"/>
      <p className='text-green-500 text-right'>= $0.00</p>
    </div>
  </div>
   
         </div>
              
     
           
                <p className='w-[70%] mt-5 mx-auto'><hr /></p>

                <div className='flex items-center justify-around mt-4'>
                    <p>13.77 eth per btc</p>
                    <p>0%</p>
                </div>
                <div className='flex mt-2 items-center justify-around'>
                    <p>0.072631 Btc per ETH</p>
                    <p>Share of pull</p>
                </div> 
                
                <div className='flex items-center justify-center gap-2 md:gap-10 my-4'>
                <button className="btn btn-secondary w-36 md:w-40  ">APPROVE BTC</button>
                <button className="btn btn-secondary w-36 md:w-40 ">APPROVE ETH</button>
                </div>
              </div>
        </div>
        </div>
    );
};

export default Liquidity;