import React from 'react';
import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs';

const AnalysisSection = () => {
  return (
    <div className='mt-24 mb-24'>
      <p className='flex justify-center text-4xl md:text-5xl font-semibold mb-8'>This is Analysis Section</p>
      <p className='flex justify-center mb-24'>Volatile crypto markets drive rapid value shifts, impacting investments worldwide.</p>
      <div className="overflow-x-auto">
        <table className="table w-11/12 mx-auto">
          {/* head */}
          <thead className='text-slate-100'>
            <tr>

              <th>Transference Type</th>
              {/* <th>Type</th> */}
              <th>Last Update</th>
              <th>Current Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>

              <td>Litecoin to Bitcoin</td>
              {/* <td>Bitcoin</td> */}
              <td>Apr 14, 2023</td>
              <td className='text-green-500'>7.7642303 USDT</td>
              <td className='text-green-500'> <BsGraphUpArrow style={{fontSize:"1.5rem"}}></BsGraphUpArrow> </td>

            </tr>
            <tr>

              <td>Litecoin to Ertherum</td>
              {/* <td>Bitcoin</td> */}
              <td>Apr 14, 2023</td>
              <td className='text-green-500'>7.7642303 USDT</td>
              <td className='text-green-500'><BsGraphUpArrow style={{fontSize:"1.5rem"}}></BsGraphUpArrow></td>

            </tr>
            <tr>

              <td>Litecoin to Monero</td>
              {/* <td>Bitcoin</td> */}
              <td>Apr 14, 2023</td>
              <td className='text-green-500'>7.7642303 USDT</td>
              <td className='text-green-500'><BsGraphUpArrow style={{fontSize:"1.5rem"}}></BsGraphUpArrow></td>

            </tr>
            <tr>

              <td>Bitcoin to Litecoin</td>
              {/* <td>Bitcoin</td> */}
              <td>Apr 14, 2023</td>
              <td className='text-green-500'>7.7642303 USDT</td>
              <td className='text-green-500'><BsGraphUpArrow style={{fontSize:"1.5rem"}}></BsGraphUpArrow></td>

            </tr>
            <tr>

              <td className='text-red-500'>Ertherum to Bitcoin</td>
              {/* <td>Bitcoin</td> */}
              <td>Apr 23, 2023</td>
              <td className='text-red-500'>6.7642303 USDT</td>
              <td className='text-red-500'> <BsGraphDownArrow style={{fontSize:"1.5rem"}}></BsGraphDownArrow> </td>

            </tr>
            <tr>

              <td className='text-red-500'>Ertherum to Litecoin</td>
              {/* <td>Bitcoin</td> */}
              <td>Apr 23, 2023</td>
              <td className='text-red-500'>5.7642303 USDT</td>
              <td className='text-red-500'><BsGraphDownArrow style={{fontSize:"1.5rem"}}></BsGraphDownArrow></td>

            </tr>
            <tr>

              <td className='text-red-500'>Ertherum to Monero</td>
              {/* <td>Bitcoin</td> */}
              <td>Apr 23, 2023</td>
              <td className='text-red-500'>5.7642300 USDT</td>
              <td className='text-red-500'><BsGraphDownArrow style={{fontSize:"1.5rem"}}></BsGraphDownArrow></td>

            </tr>
            <tr>

              <td className='text-red-500'>Bitcoin to Ertherum</td>
              {/* <td>Bitcoin</td> */}
              <td>Apr 23, 2023</td>
              <td className='text-red-500'>6.7642000 USDT</td>
              <td className='text-red-500'><BsGraphDownArrow style={{fontSize:"1.5rem"}}></BsGraphDownArrow></td>

            </tr>
            <tr>

              <td>Monero to Bitcoin</td>
              {/* <td>Bitcoin</td> */}
              <td>Apr 25, 2023</td>
              <td className='text-green-500'>7.7642303 USDT</td>
              <td className='text-green-500'><BsGraphUpArrow style={{fontSize:"1.5rem"}}></BsGraphUpArrow></td>

            </tr>
            <tr>

              <td>Bitcoin to Monero</td>
              {/* <td>Bitcoin</td> */}
              <td>Apr 25, 2023</td>
              <td className='text-green-500'>7.7642303 USDT</td>
              <td className='text-green-500'><BsGraphUpArrow style={{fontSize:"1.5rem"}}></BsGraphUpArrow></td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalysisSection;