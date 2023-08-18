/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Activities = () => {
    return (
        <div className=' mx-5 py-2 my-5 text-slate-200'>
            <div className="px-3">
                <div className='flex justify-between mb-4'>
                    <p className='font-bold'>History</p>
                    <div className='flex justify-between gap-4'>
                        <p className=' rounded p-2'>All</p>
                        <p className='border-2 border-orange-400 rounded-lg p-2'>Withdraw</p>
                        <p className='border-2 border-orange-400 rounded-lg p-2'>All Time</p>
                    </div>
                </div>
            </div>


            <div >
            <div className="overflow-x-auto">
  <table className="table w-11/12 mx-auto">
    {/* head */}
    <thead className='text-slate-100'>
      <tr>
        
        <th> Transaction ID	</th>
        <th>Type</th>
        <th>Date</th>
        <th>Status</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td> #2E293E</td>
        <td>Bitcoin</td>
        <td>Apr 14, 2023</td>
        <td>Completed</td>
        <td>7.7642303 USDT</td>

      </tr>
      <tr>
       
        <td> #2E293E</td>
        <td>Bitcoin</td>
        <td>Apr 14, 2023</td>
        <td className='text-red-500'>Pending</td>
        <td>7.7642303 USDT</td>

      </tr>
      <tr>
       
        <td> #2E293E</td>
        <td>Bitcoin</td>
        <td>Apr 14, 2023</td>
        <td>Completed</td>
        <td>7.7642303 USDT</td>

      </tr>
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Activities;