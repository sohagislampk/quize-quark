import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    const { name, questions } = quiz.data;
    return (
        <div className='my-6'>
            <h1 className='text-2xl font-bold'>{name} Quiz</h1>
            {
                questions.map((question, index) => <Question
                    key={question.id}
                    index={index}
                    question={question}
                ></Question>)
            }
        </div>
    );
};

export default Quiz;