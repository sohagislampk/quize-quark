
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Option = ({ option, correctAnswer }) => {
    const checkAnswer = () => {
        if (option === correctAnswer) {
            toast.success('Congratulations !!! Your Answer Is Correct.')
        } else {
            toast.warning('Sorry !!! Your Answer is Wrong.')
        }
    }

    return (
        <div className='text-left my-2'>
            <label className='hover:font-bold'><input type="radio" name="Corrrect Answer" onClick={checkAnswer} /> {option}</label>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Option;