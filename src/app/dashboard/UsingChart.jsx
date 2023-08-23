'use client'

import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700
  }
];


// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend
// } from "recharts";

// const data = [
//   {
//     name: "January",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400
//   },
//   {
//     name: "February",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210
//   },
//   {
//     name: "March",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290
//   },
//   {
//     name: "April",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000
//   },
//   {
//     name: "May",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181
//   },
//   {
//     name: "June",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500
//   },
//   {
//     name: "July",
//     uv: 3490,
//     pv: 400,
//     amt: 2100
//   },
//   {
//     name: "August",
//     uv: 3490,
//     pv: 400,
//     amt: 2100
//   },
//   {
//     name: "September",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100
//   },
//   {
//     name: "Octobor",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100
//   },
//   {
//     name: "November",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100
//   },
//   {
//     name: "December",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100
//   }
// ];


const UsingChart = () => {

  

  return (
    <div className="md:w-1/2 w-[300px]">
      <div>
        <h1>This is the Monthly overview chart</h1>
      </div>
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
    </div>
  //  <div className='text-white container     bg-[#171f2a] my-5 rounded-lg px-5'>
  //   <div className="flex items-center justify-between">
  //     <h1 className="my-10 px-5">Monthly Overall Groowth</h1>



  //     <article>
  //       <ul className="flex gap-5">
  //         <li>Week</li>
  //         <li>Month</li>
  //         <li>Year</li>
  //       </ul>
  //     </article>

  //   </div>
   


  // {/* <div className="bg-red-500 md:w-1/2 w-[300px] px-2 py-3">
  // <LineChart
  //     width={470}
  //     height={300}
  //     onMouseMove={Line}
  //     data={data}
  //   >
  //     <CartesianGrid strokeDasharray="3 3" />
  //     <XAxis dataKey="name" />
  //     <YAxis />
  //     <Tooltip />
  //     <Legend />
  //     <Line
  //       type="monotone"
  //       dataKey="pv"
  //       stroke="#8884d8"
  //       activeDot={{ r: 8 }}
  //     />
  //     <Line  type="monotone" dataKey="uv" stroke="#82ca9d" />
  //   </LineChart>
  // </div> */}

  // <>
  // <ResponsiveContainer width="100%" height="100%">
  //       <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
  //         <RadialBar
  //           minAngle={15}
  //           label={{ position: 'insideStart', fill: '#fff' }}
  //           background
  //           clockWise
  //           dataKey="uv"
  //         />
  //         <Legend iconSize={20} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
  //       </RadialBarChart>
  //     </ResponsiveContainer>
  // </>
    

   
  //  </div>
  );
};

export default UsingChart;