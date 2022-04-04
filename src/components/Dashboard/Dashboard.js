import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const [charts, setCharts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCharts(data))
    }, []);


    return (
        <div className='line-bar-chart'>
            <div>
                <h2 className='text-item'>Month wise sell</h2>
                <LineChart width={500} height={300} data={charts}>
                    <Line type="monotone" dataKey={'sell'} stroke="#8884d8" strokeWidth={2}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div>
                <h2 className='text-item'>Investment VS Revenue</h2>
                <BarChart width={500} height={300} data={charts}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8"></Bar>
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d"></Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;