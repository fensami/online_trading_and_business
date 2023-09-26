'use client'
import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const data = [
    {
        name: "1",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "2",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "3",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "4",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "5",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "6",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "7",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "8",
        uv: 3490,
        pv: 3000,
        amt: 2100
    },
    {
        name: "9",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "10",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "11",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "12",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "13",
        uv: 3150,
        pv: 3900,
        amt: 1800
    },
    {
        name: "14",
        uv: 2980,
        pv: 4100,
        amt: 2200
    },
    {
        name: "15",
        uv: 4050,
        pv: 4600,
        amt: 2500
    },
    {
        name: "16",
        uv: 3900,
        pv: 4400,
        amt: 2300
    },
    {
        name: "17",
        uv: 3670,
        pv: 4200,
        amt: 2100
    },
    {
        name: "18",
        uv: 3350,
        pv: 3800,
        amt: 2000
    },
    {
        name: "19",
        uv: 3120,
        pv: 3700,
        amt: 1900
    },
    {
        name: "20",
        uv: 2980,
        pv: 3600,
        amt: 1800
    },
    {
        name: "21",
        uv: 2800,
        pv: 3500,
        amt: 1700
    },
    {
        name: "22",
        uv: 2650,
        pv: 3400,
        amt: 1600
    },
    {
        name: "23",
        uv: 2520,
        pv: 3300,
        amt: 1500
    },
    {
        name: "24",
        uv: 2400,
        pv: 3200,
        amt: 1400
    },
    {
        name: "25",
        uv: 2280,
        pv: 3100,
        amt: 1300
    },
    {
        name: "26",
        uv: 2160,
        pv: 3000,
        amt: 1200
    },
    {
        name: "27",
        uv: 2040,
        pv: 2900,
        amt: 1100
    },
    {
        name: "28",
        uv: 1920,
        pv: 2800,
        amt: 1000
    },
    {
        name: "29",
        uv: 1800,
        pv: 2700,
        amt: 900
    },
    {
        name: "30",
        uv: 1680,
        pv: 2600,
        amt: 800
    }
];
const Chart_1 = () => {
    return (
        <div style={{ overflowX: "auto", width: "100%" }}>
            <AreaChart
                width={500}
                height={350}

                data={data}
                syncId="anyId"
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
        </div>
    );
};

export default Chart_1;