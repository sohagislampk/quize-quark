import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const topics = useLoaderData();
    const data = topics.data
    return (
        <div className='mt-10 md:mx-60'>
            <ResponsiveContainer width="90%" height={400}>
                <LineChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line dataKey="total" type="monotone" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
            <h1 className='text-2xl my-2'>Quiz Quantity and Topics Chart</h1>
        </div>
    );
};

export default Statistics;