import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Couse/Course'
const Allcourses = () => {
    const allcourses = useLoaderData();
    const courses=allcourses.data;
    return (
        <div>
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

export default Allcourses;