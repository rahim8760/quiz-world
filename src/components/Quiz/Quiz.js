import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css'

const Quiz = () => {
    const allquestions=useLoaderData();;
    const {name, questions}=allquestions.data;
    console.log(name);
    return (
        <div>
            <h1>welcome to {name} quiz</h1>
            <h3>Total Question={questions.length}</h3>
            {
                questions.map(question=><Question
                key={question.id}
                qizquestion={question}
                ></Question>)
            }
        </div>
    );
};

export default Quiz;