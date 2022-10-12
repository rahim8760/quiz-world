import React from 'react';
import Options from '../Options/Options';
import './Question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';

const Question = ({qizquestion}) => {
    const {correctAnswer, question, options}=qizquestion;
    const notify = () => toast("This is Right Answer");
    const rongnotify = () => toast("This is wrong Answer");
    const [open, setOpen] = useState(true);
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
                <h3>{question} <div onClick={() => setOpen(!open)}>
                    {
                        open ? <AiFillEyeInvisible /> : <AiFillEye />
                        
                    }
                    <p className={`${open ? "hidden" :"show"}`}>{correctAnswer} </p>
                </div>
                </h3>
                
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