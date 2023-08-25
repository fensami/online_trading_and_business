"use client";
import React, { Component } from 'react';
import {
    ComposedChart,
    Area,
    XAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ReferenceLine,
} from 'recharts';

const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

class RealTimeChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        // Initial data fetch
        this.updateData();

        // Start dynamic data updates at intervals
        this.updateDataInterval = setInterval(this.updateDynamicData, 1000 * 60); // Update every minute
    }

    componentWillUnmount() {
        // Clear the interval when the component is unmounted
        clearInterval(this.updateDataInterval);
    }

    updateData = () => {
        const currentDate = new Date();
        const daysInMonth = currentDate.getDate(); // Number of days passed in the current month

        const newData = [];
        for (let day = 1; day <= daysInMonth; day++) {
            newData.push({
                day: `${monthNames[currentDate.getMonth()]} ${day}`,
                value: Math.floor(Math.random() * 5000) + 1000,
            });
        }

        this.setState({ data: newData });
    };

    updateDynamicData = () => {
        // Simulate fetching dynamic data from an API using a random value for demonstration
        const newValue = Math.floor(Math.random() * 100);

        const newData = this.state.data.slice(); // Create a copy of existing data
        newData.push({
            day: `${monthNames[new Date().getMonth()]} ${new Date().getDate()}`,
            value: newValue,
        });

        this.setState({ data: newData });
    };

    render() {
        return (
            <div className="chart-wrapper w-[100%]">
                <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={this.state.data}>
                        <XAxis
                            dataKey="day"
                            angle={-30}
                            textAnchor="end"
                            interval="preserveStartEnd"
                            tick={{ fill: 'white' }}
                            style={{ display: 'block' }}
                            allowDataOverflow={true}
                            domain={['dataMin', 'dataMax']}
                            type="category"
                            padding={{ left: 20, right: 20 }}
                        />
                        <Tooltip labelStyle={{ color: 'black' }} />
                        <Legend wrapperStyle={{ color: 'white' }} />
                        <Area
                            type="monotone"
                            dataKey="value"
                            fill="url(#colorGradient)"
                        />
                        <ReferenceLine y={0} stroke="#666" />
                        <defs>
                            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={1} />
                                <stop offset="95%" stopColor="white" stopOpacity={0.8} />
                            </linearGradient>
                        </defs>
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default RealTimeChart;