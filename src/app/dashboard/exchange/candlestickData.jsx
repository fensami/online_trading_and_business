"use client"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    CandlestickChart,
    Candlestick,
} from 'recharts';



const areaData = [
    { date: '2023-01-01', open: 1200, high: 1300, low: 1150, close: 1250 },
    { date: '2023-01-02', open: 1250, high: 1280, low: 1200, close: 1260 },
    { date: '2023-01-03', open: 1260, high: 1320, low: 1240, close: 1300 },
    // Add more data points...
];

const CombinedChart = () => {
    return (
        <div className="chart-container">
            <div className="chart">
                <h2>Gradient Area Chart</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={areaData}>
                        <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="price"
                            stroke="#8884d8"
                            fillOpacity={1}
                            fill="url(#colorPrice)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default CombinedChart;