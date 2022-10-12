import React from 'react';
import { Toast } from 'react-bootstrap';
import Options from '../Options/Options';
import './Question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({qizquestion}) => {
    const {correctAnswer, question, options}=qizquestion;
    const notify = () => toast("This is Right Answer");
    const rongnotify = () => toast("This is wrong Answer");
    const rightans=(option)=>{
        if(option===correctAnswer){
            {notify()}
        }else{
            
            {rongnotify()}
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
            <ToastContainer />
        </div>
    );
};

export default Question;