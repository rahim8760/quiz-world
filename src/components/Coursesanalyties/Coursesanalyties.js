import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Coursesanalyties.css'

const Coursesanalyties = () => {
    const courses=useLoaderData()
    const data=courses.data

    console.log(data)
    
    return (
        <div>
            <h1>hallo from Courses Analyties </h1>
        </div>
    );
};

export default Coursesanalyties;