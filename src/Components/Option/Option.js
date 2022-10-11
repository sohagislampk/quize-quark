
import React from 'react';

const Option = ({ option }) => {
    return (
        <div>
            <input type="radio" name="Correct Answer" /> {option}

        </div>
    );
};

export default Option;