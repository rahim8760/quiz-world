import React from 'react';
import { Toast } from 'react-bootstrap';
import Options from '../Options/Options';
import './Question.css'

const Question = ({qizquestion}) => {
    const {correctAnswer, question, options}=qizquestion;
    const rightans=(option)=>{
        if(option===correctAnswer){
            console.log('correct ans');
        }else{
            alert('This is rong answer')
        }
    }
    return (
        <div>
            <div className="quiz_quction">
                <h3>{question}</h3>
                
            </div>
            <div className="option_container">
                {
                    options.map(option=><Options
                    key={option}
                    qizoption={option}
                    rightans={rightans}
                    ></Options>)
                }
            </div>
        </div>
    );
};

export default Question;