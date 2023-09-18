"use client";

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
  Legend,
} from "recharts";

const data = [
  {
    name: "January",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "February",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "March",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "April",
    uv: 1480,
    pv: 200,
    amt: 1228,
  },
  {
    name: "May",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "June",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

const UsingChart = () => {
  return (
    <div className="bg-[#171f2a] rounded-lg p-4 md:mx-0 mx-2">
      <div>
        <h1 className=" text-center text-2xl mb-3 font-semibold">
          Monthly Overall Growth
        </h1>
        <article className="flex justify-around ">
          <button className="bg-gray-700 px-4 py-1 rounded-tl-md rounded-br-md">
            Week
          </button>
          <button className="bg-gray-700 px-4 py-1 rounded-tl-md rounded-br-md">
            Month
          </button>
          <button className="bg-gray-700 px-4 py-1 rounded-tl-md rounded-br-md">
            Year
          </button>
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
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsingChart;
