import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Couse/Course';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const allcourses = useLoaderData();
    const courses=allcourses.data
    console.log(courses)
    return (
        <div>
            <h1>hallo from Home {courses.length}</h1>
            {
                courses.map(course=><Course
                key={course.id}
                course={course}
                ></Course> )
            }
        </div>
    );
};

export default Home;