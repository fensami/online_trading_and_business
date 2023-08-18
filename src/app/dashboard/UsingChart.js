'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "January",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "February",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "July",
    uv: 3490,
    pv: 400,
    amt: 2100
  },
  {
    name: "August",
    uv: 3490,
    pv: 400,
    amt: 2100
  },
  {
    name: "September",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Octobor",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "November",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "December",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];


const UsingChart = () => {
  return (
   <div className='text-white overflow-auto md:w-1/2 bg-[#171f2a] my-5 rounded-lg px-5'>
    <div className="flex items-center justify-between">
      <h1 className="my-10 px-5">Monthly Overall Groowth</h1>



      <article>
        <ul className="flex gap-5">
          <li>Week</li>
          <li>Month</li>
          <li>Year</li>
        </ul>
      </article>

    </div>
   


    <LineChart
      width={600}
      height={300}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    

   
   </div>
  );
};

export default UsingChart;