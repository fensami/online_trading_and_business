// import  {useState}  from 'react';
import { FaBitcoin, FaEthereum, FaSearch } from 'react-icons/fa';
import { SiCardano, SiDogecoin, SiTether } from 'react-icons/si';

const Farm = () => {


    return (
        <div className='md:mx-5 mx-1 md:py-2 p-1 my-5 text-slate-200'>
            <div className='md:flex md:justify-between md:w-[980px] grid grid-cols-1 gap-5 mb-6 md:px-5'>

                <article className='flex gap-3 w-10'>
                    <button className='btn'>LIVE</button>
                    <button className='btn'>FINISHED</button>
                </article>

             
                
                    {/* <FaSearch className='text-slate-200'></FaSearch>  */}
                    
                    <input className='px-3 py-1 w-52 rounded-md bg-[#131720] border border-slate-200' type="text" placeholder='Search Farm' />
                




                <article className='text-slate-200 bg-[#171f2a] w-10'>
                    <select className="select">
                        <option disabled selected className=' text-slate-200'>Pick Category</option>
                        <option>HOT</option>
                        <option>APR</option>
                        <option>EARNED</option>
                        <option>TOTAL STACKED</option>
                        <option >LATEST</option>
                    </select>
                </article>
            </div>







            <>
                <div className="overflow-x-auto w-72 md:w-[1000px]">
                    <table className="table">
                        {/* head */}
                        <thead className='text-slate-100 '>
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
            </>
        </div>
    );
};

export default Farm;