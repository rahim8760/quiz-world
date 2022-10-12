import React from 'react';
import './Options.css'


const Options = ({qizoption, rightans }) => {
    return (
        <div className='option'>
            <div className="optopn_link">
            <label onClick={()=>rightans(qizoption)} htmlFor="option">
                
                <p><input name="option" type="radio" />{qizoption}</p>
            </label>
            </div>
        </div>
    );
};

export default Options;