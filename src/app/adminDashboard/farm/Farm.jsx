// import  {useState}  from 'react';
import { FaBitcoin, FaEthereum, FaRegStar, FaSearch } from 'react-icons/fa';
import { SiCardano, SiDogecoin, SiTether } from 'react-icons/si';

const Farm = () => {


    return (
        <div className=' mx-5 py-2 my-5 text-slate-200 w-11/12'>
            <div className='flex justify-evenly mb-6'>
                <article className='flex gap-3'>
                    <button className='btn'>LIVE</button>
                    <button className='btn'>FINISHED</button>
                </article>
                <article>
                    <div className="form-control flex gap-3">
                        <label className="label cursor-pointer gap-3">
                            <input type="checkbox" className="toggle" checked />
                            <span className="text-white">STACKED ONLY</span>
                        </label>
                    </div>
                </article>
                <article>
                    <span className='flex justify-around gap-4 bg-white p-2 text-gray-700 rounded-lg rounded-t-lg'> <FaSearch></FaSearch> <input type="text" /></span>
                </article>
                <article>
                    <select className="select text-black w-full max-w-xs">
                        <option disabled selected className='text-black'>Pick Category</option>
                        <option className='text-black'>HOT</option>
                        <option className='text-black'>APR</option>
                        <option className='text-black'>EARNED</option>
                        <option className='text-black'>TOTAL STACKED</option>
                        <option className='text-black'>LATEST</option>
                    </select>
                </article>
            </div>
            <div >
                <div className="overflow-x-auto">
                    <table className="table w-11/12 mx-auto">
                        {/* head */}
                        <thead className='text-slate-100'>
                            <tr>
                                <th>POOL</th>
                                <th>EARNED</th>
                                <th>APR</th>
                                <th>LIQUIDITY</th>
                                <th>MULTIPIER</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>

                                <td className='flex gap-1'> <FaBitcoin className='text-yellow-500' style={{ fontSize: "1.2rem" }}></FaBitcoin><FaEthereum className='text-green-500 -ml-4' style={{ fontSize: "1.2rem" }}></FaEthereum>BTC-ETH</td>
                                <td> 0 </td>
                                <td> 29.72% <br /> <small>ANNUALIZED</small></td>
                                <td>$232,941,720</td>
                                <td>20X</td>
                                
                            </tr>
                            <tr>

                                <td className='flex gap-1'><SiDogecoin className='text-yellow-600' style={{ fontSize: "1.2rem" }}></SiDogecoin><SiTether className='text-green-700 -ml-3' style={{ fontSize: "1.2rem" }}></SiTether>USDT-BNB</td>
                                <td>0</td>
                                <td> 25.20% <br /> <small>ANNUALIZED</small></td>
                                <td>$332,941,720</td>
                                <td>32X</td>

                            </tr>
                            <tr>

                                <td className='flex gap-1'><FaEthereum className='text-green-500' style={{ fontSize: "1.2rem" }}></FaEthereum><SiDogecoin className='text-yellow-600 -ml-3' style={{ fontSize: "1.2rem" }}></SiDogecoin>USDC-DOGE</td>
                                <td>0</td>
                                <td> 33.73% <br /> <small>ANNUALIZED</small></td>
                                <td>$332,941,720</td>
                                <td>42X</td>

                            </tr>
                            <tr>

                                <td className='flex gap-1'><SiTether className='text-green-700' style={{ fontSize: "1.2rem" }}></SiTether><SiCardano className='text-blue-700 -ml-3' style={{ fontSize: "1.2rem" }}></SiCardano>BTC-ADA</td>
                                <td>0</td>
                                <td> 10.73% <br /> <small>ANNUALIZED</small></td>
                                <td>$132,941,720</td>
                                <td>35X</td>

                            </tr>
                            <tr>

                                <td className='flex gap-1'><SiCardano className='text-blue-700' style={{ fontSize: "1.2rem" }}></SiCardano><SiTether className='text-green-700 -ml-3' style={{ fontSize: "1.2rem" }}></SiTether>BNB-USDC</td>
                                <td>0</td>
                                <td> 20.73% <br /> <small>ANNUALIZED</small></td>
                                <td>$232,941,720</td>
                                <td>34X</td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Farm;