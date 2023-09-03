import React from 'react';
import { FaBitcoin, FaEthereum, FaRegStar, FaSearch } from 'react-icons/fa';
import { SiCardano, SiDogecoin, SiTether } from 'react-icons/si';
import LivePriceCard from './LivePriceCard';

const LivePrices = () => {
    return (

        <div className=' mx-5 py-2 my-5 text-slate-200 md:w-10/12 lg:w-10/12 w-full'>
            <LivePriceCard></LivePriceCard>
            <div className='md:flex md:justify-between w-1/2 mb-6'>
                <p className='text-xl font-bold ml-10'>CRYPTOCURRENCY PRICES</p>
                <span className='flex justify-around gap-4 bg-white p-2 text-gray-700 rounded-lg rounded-t-lg'> <FaSearch></FaSearch> <input type="text" /></span>
            </div>
            <div >
                <div className="overflow-x-auto w-2/3">
                    <table className="table w-11/12 mx-auto">
                        {/* head */}
                        <thead className='text-slate-100'>
                            <tr>
                                <th></th>
                                <th>#</th>
                                <th>Coin Name</th>
                                <th>Price</th>
                                <th>1h%</th>
                                <th>24h%</th>
                                <th>Circulating Supply</th>
                                <th>Volume (24h)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>

                                <td> <FaRegStar></FaRegStar> </td>
                                <td> 1 </td>
                                <td className='flex gap-1'> <FaBitcoin className='text-yellow-500' style={{ fontSize: "1.2rem" }}></FaBitcoin>BITCOIN</td>
                                <td>$266645.34</td>
                                <td className='text-red-500'>-0.5%</td>
                                <td className='text-red-500'>-0.4%</td>
                                <td>$15464976</td>
                                <td>$25464976</td>

                            </tr>
                            <tr>

                                <td> <FaRegStar></FaRegStar> </td>
                                <td>2</td>
                                <td className='flex gap-1'><SiDogecoin className='text-yellow-600' style={{ fontSize: "1.2rem" }}></SiDogecoin>DOGE</td>
                                <td>$136544.45</td>
                                <td className='text-red-500'>-0.3%</td>
                                <td className='text-red-500'>-2.9%</td>
                                <td>$15464976</td>
                                <td>$25464976</td>

                            </tr>
                            <tr>

                                <td> <FaRegStar></FaRegStar> </td>
                                <td>3</td>
                                <td className='flex gap-1'><FaEthereum className='text-green-500' style={{ fontSize: "1.2rem" }}></FaEthereum>ETHEREUM</td>
                                <td>$242536.15</td>
                                <td className='text-green-400'>+0.5%</td>
                                <td className='text-green-400'>+4.0%</td>
                                <td>$15464976</td>
                                <td>$25464976</td>

                            </tr>
                            <tr>

                                <td> <FaRegStar></FaRegStar> </td>
                                <td>4</td>
                                <td className='flex gap-1'><SiTether className='text-green-700' style={{ fontSize: "1.2rem" }}></SiTether>TETHER</td>
                                <td>$402534.15</td>
                                <td className='text-green-400'>+0.6%</td>
                                <td className='text-green-400'>+4.4%</td>
                                <td>$15464976</td>
                                <td>$25464976</td>

                            </tr>
                            <tr>

                                <td> <FaRegStar></FaRegStar> </td>
                                <td>5</td>
                                <td className='flex gap-1'><SiCardano className='text-blue-700' style={{ fontSize: "1.2rem" }}></SiCardano>CARDANO</td>
                                <td>$305346.15</td>
                                <td className='text-green-400'>+0.5%</td>
                                <td className='text-green-400'>+3.9%</td>
                                <td>$15464976</td>
                                <td>$25464976</td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default LivePrices;