import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const data = useLoaderData();
    const topics = data.data;
    return (
        <div className='grid grid-cols-3 my-16 gap-16 mx-16 '>
            {
                topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;