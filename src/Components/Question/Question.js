import React from 'react';
import Option from '../Option/Option';

const Question = (props) => {
    const { question, options, correctAnswer } = props.question
    console.log(props.index);
    return (
        <div>
            <h1>{props.index + 1}. {question}</h1>
            {
                options.map((option, index) => <Option
                    key={index}
                    option={option}
                ></Option>)
            }
        </div>
    );
};

export default Question;