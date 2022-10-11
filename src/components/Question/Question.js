import React from 'react';
import Options from '../Options/Options';
import './Question.css'

const Question = ({qizquestion}) => {
    const {question, options}=qizquestion;
    return (
        <div>
            <div className="quiz_quction">
                <h2>{question}</h2>
            </div>
            <div className="option_container">
                {
                    options.map(option=><Options
                    key={option}
                    qizoption={option}
                    ></Options>)
                }
            </div>
        </div>
    );
};

export default Question;