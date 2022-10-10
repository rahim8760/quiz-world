import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = ({course}) => {
    const {id ,name, logo}=course;
    return (
        <div>
            <img src={logo} alt="" />
            <h1>{name}</h1>
            <Link to={`/course/${id}`}>start Quiz</Link>
        </div>
    );
};

export default Course;