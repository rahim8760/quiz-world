import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className="side_logo">
                <h1>Quiz World</h1>
            </div>
            <div className='header'>
                <Link to='/home'>Home</Link>
                <Link to='/allcourses'>All Courses</Link>
                <Link to='/coursesanalyties'>Courses Analyties</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </div>
        
    );
};

export default Header;