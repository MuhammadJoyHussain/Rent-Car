import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ service }) => {
    return (
        <div className="service-card">
            <img src={service.imageURL} alt="" />
            <div className="info">
                <h1>{service.event}</h1>
                <h4>Vehicle Name: {service.vehicle}</h4>
                <h4>Price Per Day: $ {service.price}</h4>
                <Link to="/dashboard/book"><button>Book Now</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;