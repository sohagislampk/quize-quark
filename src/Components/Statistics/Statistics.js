import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const Statistics = () => {
    const topics = useLoaderData();
    const data = topics.data
    return (
        <div>
            <div className='flex justify-center mt-10'>
                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <h1 className='text-xl font-bold mt-6'>Name : Quiz Quantity and Topics Chart</h1>
        </div>
    );
};

export default Statistics;