import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
const Topic = ({ topic }) => {
    const { logo, name, total, id } = topic;
    const naviagte = useNavigate();
    const handleNavigate = () => {
        naviagte(`/quiz/${id}`);
    }
    return (
        <div className='border border-gray-400 rounded-2xl p-4'>
            <img className='bg-gray-700 rounded-xl' src={logo} alt="" />
            <p className='text-2xl font-bold mt-4'>{name}</p>
            <div className='flex justify-between items-center mt-4'>
                <p className='text-xl'>Total Quiz : {total}</p>
                <button onClick={handleNavigate} className='bg-cyan-400 font-bold py-2 px-4 rounded-lg'>Start Quiz <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Topic;