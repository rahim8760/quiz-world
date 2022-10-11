import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Couse/Course';
import './Home.css'

const Home = () => {
    const allcourses = useLoaderData();
    const courses=allcourses.data;
    return (
        <div className='home_container'>
            <div className='header_titel'>
                <h1>Practice Makes A Man Perfect </h1>
                <p>Total Quiz Topic : {courses.length}</p>
            </div>
            <div className="courses_container">
                {
                    courses.map(course=><Course
                    key={course.id}
                    course={course}
                    ></Course> )
                }
                
            </div>
        </div>
    );
};

export default Home;