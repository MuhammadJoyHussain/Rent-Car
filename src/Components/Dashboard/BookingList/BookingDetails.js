import React from 'react';

const BookingDetails = (props) => {
    const { shipping } = props.book;

    return (
        <div className="booking">
            <p>Name: {shipping.name}</p>
            <p>Email: {shipping.email}</p>
            <p>Number: {shipping.phone}</p>
        </div>
    );
};

export default BookingDetails;