
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Option = ({ option, correctAnswer }) => {
    const checkAnswer = () => {
        if (option === correctAnswer) {
            toast.success('Congratulations !!! Your Answer Is Correct')
        } else {
            toast.warning('Sorry !!! Your Answer is Wrong')
        }
    }

    return (
        <div className='text-left my-2'>
            <input onClick={checkAnswer} type="radio" name="Corrrect Answer" /> {option}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Option;