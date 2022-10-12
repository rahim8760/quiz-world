import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div>
                <h1>Welcome to Blog </h1>  
            </div>
            <div>
                <div className='blog_question'>
                    <div> 
                        <h2>
                        The purpose of React router
                        </h2>
                    </div>
                    <div>
                        <p>
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        </p>
                    </div>
                </div>
                <div className='blog_question'>
                    <div> 
                        <h2>
                        How does react context work?
                        </h2>
                    </div>
                    <div>
                        <p>
                        React's context allows you to share information to any component, by storing it in a central place and allowing access to any component that requests it (usually you are only able to pass data from parent to child via props).
                        </p>
                    </div>
                </div>
                <div className='blog_question'>
                    <div> 
                        <h2>
                        How does react use ref work?
                        </h2>
                    </div>
                    <div>
                        <p>
                        React will assign the current property with the DOM element when the component mounts, and assign it back to null when it unmounts. ref updates happen before componentDidMount or componentDidUpdate lifecycle methods.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;