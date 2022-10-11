import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    const { name, questions } = quiz.data;
    return (
        <div>
            <h1>{name} Quiz</h1>
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