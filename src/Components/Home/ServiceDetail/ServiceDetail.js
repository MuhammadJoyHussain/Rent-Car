import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const ServiceDetail = (props) => {
    const { imageURL, event, vehicle, price, _id } = props.service;
    const history = useHistory();
    const details = () => {
        const url = `/dashboard/book${_id}`
        history.push(url)
    }

    return (
        <div className="service-card">
            <img src={imageURL} alt="" />
            <div className="info">
                <h1>{event}</h1>
                <h4>Vehicle Name: {vehicle}</h4>
                <h4>Price Per Day: $ {price}</h4>
                <Link onClick={() => details()}><button>Book Now</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;