import React, { useState } from 'react';
import './OrderDetails.css'

const OrderDetails = ({orders}) => {
    const[status, setStatus] = useState('pending');
    const handleStatus = e => {
        const selectedStatus = e.target.value;
        setStatus(selectedStatus);
    }

    return (
        <div className="order-list">
            <h3>Name: {orders.shipping.name}</h3>
            <div>
                <select onChange={handleStatus} className="select">
                    <option value="pending">Pending</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="done">Done</option>
                </select>
                {status}
            </div>
        </div>
    );
};

export default OrderDetails;