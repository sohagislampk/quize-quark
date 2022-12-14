import React from 'react';
import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = (props) => {
    const { question, options, correctAnswer } = props.question;
    const notify = () => toast.success(`Answer Is : ${correctAnswer}`, { className: 'text-xl' });

    return (
        <div className='mt-4 md:w-7/12 mx-auto text-left bg-slate-400 p-6 rounded-3xl'>
            <dir className='text-right m-0'><FontAwesomeIcon icon={faEye} onClick={notify} /></dir>
            <h1 className='font-bold mb-1'>{props.index + 1}. {question.slice(3, question.length - 4)}</h1>
            <div className='grid md:grid-cols-2 md:justify-center items-center'>
                {
                    options.map((option, index) => <Option
                        key={index}
                        option={option}
                        correctAnswer={correctAnswer}
                    ></Option>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Question;