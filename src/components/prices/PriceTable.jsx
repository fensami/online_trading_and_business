// import Image from 'next/image';
// import React from 'react';
// import { FaStar } from 'react-icons/fa';
// import { Area, AreaChart } from 'recharts';


// const dataa = [
//         {
//           name: 'Page A',
//           uv: 3000,
//           pv: 2400,
//           amt: 2400,
//         },
//         {
//           name: 'Page B',
//           uv: 2000,
//           pv: 398,
//           amt: 2210,
//         },
//         {
//           name: 'Page C',
//           uv: 2000,
//           pv: 9800,
//           amt: 2290,
//         },
//         {
//           name: 'Page D',
//           uv: 2780,
//           pv: 3908,
//           amt: 2000,
//         },
//         {
//           name: 'Page E',
//           uv: 1890,
//           pv: 4800,
//           amt: 2181,
//         },
//         {
//           name: 'Page F',
//           uv: 2390,
//           pv: 3800,
//           amt: 2500,
//         },
//         {
//           name: 'Page G',
//           uv: 3490,
//           pv: 4300,
//           amt: 2100,
//         },
//       ];

// const PriceTable = ({pricedata,index}) => {
//         const {coin_name, order, available_balance, total_balance,price, image, market}= pricedata;
//         return (
//                 <> 
//       <tr> 
//         <td>
//                 <div className='flex items-center gap-3'>
//                 <FaStar></FaStar> 
//                 {index + 1}
//                 </div>
//         </td>
        
//         <td className='flex gap-1 mt-3 items-center'> <Image className='rounded-full' height={30} width={30} src= {image} alt=''></Image> {coin_name}</td>
//         <td>${price}</td>
//         <td className='text-orange-300'>{market}</td>
//         <td>${available_balance}</td>
//         <td>${total_balance}</td>
//         <td className=' '>
//         <AreaChart
//                                 width={100}
//                                 height={50}
//                                 data={dataa}
//                                 margin={{
//                                 top: 5,
//                                 right: 0,
//                                 left: 0,
//                                 bottom: 5,
//                                 }}
//                                 >
//                                 <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
//                        </AreaChart>
//         </td>
//         <td> 
//       <button className='bg-[#171f2a] px-3 py-1 border border-slate-600 rounded hover:bg-green-500'>Trade</button>
//         </td>
         
//       </tr>  
//                 </>
//         );
// };

// export default PriceTable;