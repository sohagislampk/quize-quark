
import React from 'react';

const Option = ({ option }) => {
    return (
        <div className='text-left my-2'>
            <input type="radio" name="Correct Answer" /> {option}

        </div>
    );
};

export default Option;