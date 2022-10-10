import React from 'react';
import Options from '../Options/Options';

const Question = ({qizquestion}) => {
    const {question, options}=qizquestion;
    return (
        <div>
            <h2>{question}</h2>
            {
                options.map(option=><Options
                key={option}
                qizoption={option}
                ></Options>)
            }
        </div>
    );
};

export default Question;