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
    name: "January",
    uv: 590,
    pv: 800,
    amt: 1400
  },
  {
    name: "February",
    uv: 868,
    pv: 967,
    amt: 1506
  },
  {
    name: "March",
    uv: 1397,
    pv: 1098,
    amt: 989
  },
  {
    name: "April",
    uv: 1480,
    pv: 200,
    amt: 1228
  },
  {
    name: "May",
    uv: 1520,
    pv: 1108,
    amt: 1100
  },
  {
    name: "June",
    uv: 1400,
    pv: 680,
    amt: 1700
  }
];


const UsingChart = () => {

  

  return (
    <div className="bg-[#171f2a] rounded-lg p-4">
      <div>
        <h1>Monthly Overall Growth</h1>
        <article className="flex gap-3 justify-between">
          <button>Week</button>
          <button>Month</button>
          <button>Year</button>
        </article>
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