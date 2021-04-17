import React from 'react';
import './Testimonials.css'
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Testimonials = ({ reviews }) => {
    return (
        <div className="col">
            <div className="testimonial">
                <img src={reviews.imageURL} alt="" />
                <h1>Name: {reviews.name}</h1>
                <p>{reviews.designation}</p>
                <div className="star">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <p>{reviews.discription}</p>
            </div>
        </div>
    );
};

export default Testimonials;