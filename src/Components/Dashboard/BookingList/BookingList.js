import React, { useEffect, useState } from 'react';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import BookingDetails from './BookingDetails';
import './BookingList.css'

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/orders')
        .then(res=>res.json())
        .then(data => setBookings(data))
    }, [])

    return (
        <div>
            <div><DashboardSidebar /></div>
            <div className="book-list">
                {
                    bookings.map(book => <BookingDetails book={book} />)
                }
            </div>
        </div>
    );
};

export default BookingList;