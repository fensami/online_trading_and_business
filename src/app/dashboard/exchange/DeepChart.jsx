"use client"
import  './exchange.css'
import {
    ComposedChart,
    Bar,
    Line,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const ResponsiveChart = () => {
    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={data}>
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="green" />
                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="pv" barSize={20} fill="#10b981" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ResponsiveChart;
