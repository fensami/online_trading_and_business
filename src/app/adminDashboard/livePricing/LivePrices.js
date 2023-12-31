import React from 'react';
import { FaBitcoin, FaEthereum, FaRegStar, FaSearch } from 'react-icons/fa';
import { SiCardano, SiDogecoin, SiTether } from 'react-icons/si';
import LivePriceCard from './LivePriceCard';

const LivePrices = () => {
    return (

        <div className='py-2 my-5 text-slate-200'>
            <div>
                <LivePriceCard></LivePriceCard>
            </div>



         




            <div className='bg-[#171f2a] py-6 md:w-[1080px] w-72 overflow-x-auto px-8 mx-8'>




                <div className='md:flex md:justify-between grid gap-4 mb-6 px-5'>
                    <p className='md:text-xl font-bold md:ml-10 ml-0 md:inline-flex'>CRYPTOCURRENCY PRICES</p>
                    {/* <p className='text-xl font-bold md:ml-10 ml-0'>CRYPTOCURRENCY PRICES</p> */}


                    <article className=''>
                        <span className='flex items-center gap-4 bg-white p-2 text-gray-700 rounded-lg'> <FaSearch></FaSearch> <input type="text" className='bg-white border border-black w-1/2 md:w-full' /></span>
                    </article>
                </div>



                <div className="overflow-x-auto">
                    <table className="table">
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