'use client'
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '1',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '2',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '3',
        uv: 3200,
        pv: 2000,
        amt: 2290,
    },
    {
        name: '4',
        uv: 2800,
        pv: 2800,
        amt: 2000,
    },
    {
        name: '5',
        uv: 3500,
        pv: 1000,
        amt: 2100,
    },
    {
        name: '6',
        uv: 4500,
        pv: 2890,
        amt: 2100,
    },
    {
        name: '7',
        uv: 3800,
        pv: 3490,
        amt: 2100,
    },
    {
        name: '8',
        uv: 3200,
        pv: 1890,
        amt: 2100,
    },
    {
        name: '9',
        uv: 4200,
        pv: 3200,
        amt: 2100,
    },
    {
        name: '10',
        uv: 3300,
        pv: 2100,
        amt: 2100,
    },
    {
        name: '11',
        uv: 3700,
        pv: 2500,
        amt: 2100,
    },
    {
        name: '12',
        uv: 3400,
        pv: 2100,
        amt: 2100,
    },
    {
        name: '13',
        uv: 2800,
        pv: 2800,
        amt: 2100,
    },
    {
        name: '14',
        uv: 3200,
        pv: 2000,
        amt: 2100,
    },
    {
        name: '15',
        uv: 3800,
        pv: 3490,
        amt: 2100,
    },
    {
        name: '16',
        uv: 4500,
        pv: 2890,
        amt: 2100,
    },
    {
        name: '17',
        uv: 3500,
        pv: 1000,
        amt: 2100,
    },
    {
        name: '18',
        uv: 2800,
        pv: 2800,
        amt: 2100,
    },
    {
        name: '19',
        uv: 3200,
        pv: 2000,
        amt: 2100,
    },
    {
        name: '20',
        uv: 3300,
        pv: 2100,
        amt: 2100,
    },
    {
        name: '21',
        uv: 3700,
        pv: 2500,
        amt: 2100,
    },
    {
        name: '22',
        uv: 3400,
        pv: 2100,
        amt: 2100,
    },
    {
        name: '23',
        uv: 2800,
        pv: 2800,
        amt: 2100,
    },
    {
        name: '24',
        uv: 3200,
        pv: 2000,
        amt: 2100,
    },
    {
        name: '25',
        uv: 3800,
        pv: 3490,
        amt: 2100,
    },
    {
        name: '26',
        uv: 4500,
        pv: 2890,
        amt: 2100,
    },
    {
        name: '27',
        uv: 3500,
        pv: 1000,
        amt: 2100,
    },
    {
        name: '28',
        uv: 2800,
        pv: 2800,
        amt: 2100,
    },
    {
        name: '29',
        uv: 3200,
        pv: 2000,
        amt: 2100,
    },
    {
        name: '30',
        uv: 3300,
        pv: 2100,
        amt: 2100,
    }

];

const Chart_2 = () => {
    return (
        <div  style={{ height: '400px', overflowY: 'auto' }}>
            <ResponsiveContainer width="100%" height='75%'>
                <BarChart
                    width={500}
                    height={250}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip/>
                    <Legend/>
                    <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
                    <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart_2;