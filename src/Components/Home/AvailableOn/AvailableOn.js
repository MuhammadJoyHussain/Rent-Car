import React from 'react';
import './AvailableOn.css'
import available from '../../../Images/phone.jpg'

const AvailableOn = () => {
    return (
        <div className="available">
            <div className="available-img">
            <img src={available} alt=""/>
            </div>
            <div className="available-text">
            <h3>We Are Available On <i className="fab fa-apple"></i></h3>
            <h3>We Are Available On <i className="fab fa-android"></i></h3>
            </div>
        </div>
    );
};

export default AvailableOn;