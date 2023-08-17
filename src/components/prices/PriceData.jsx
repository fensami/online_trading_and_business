 
import React from 'react';
import PriceTable from './PriceTable';
import dataget from '@/utils/dataget';

const PriceData = async () => {
        const prices = await dataget()
        return (
                <div className='bg-[#171f2a] md:px-10 ml-8 py-8'>
                        <div className='md:flex justify-between items-center mb-8'>
                                <div className='text-2xl font-bold'>Crytocurrency Prices</div>
                                <div className='flex justify-start md:gap-6'>
                                <div className="form-control">
  <div className="input-group mr-5">
    <input type="text" placeholder="Search…" className="bg-[#171f2a] input input-bordered border border-gray-500" />
    <button className="btn text-white bg-[#171f2a]">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>  

<select className="select select-info w-32 bg-[#171f2a] max-w-xs">
  <option >All Time</option>
  <option>This Week</option>
  <option>This Month</option>
  <option>This Year</option>
</select>
                                </div>
                        </div>
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr className='text-white font-bold'>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h %</th>
                        <th>Market Cap</th>
                        <th>Volume</th>
                        <th>Charts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                         prices.map((pricedata, index) => <PriceTable key={pricedata.id}
                         pricedata = {pricedata}
                         index = {index}
                        ></PriceTable>)
                      } 
                    </tbody>
                  </table>
                </div>   
                                        
                                </div>
        );
};

export default PriceData;