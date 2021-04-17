import React, { useState } from "react";
import Navbar from '../../Shared/Navbar/Navbar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './TopBanner.css'

const TopBanner = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="banner-area">
            <Navbar />
            <div className="pick-up">
                <DatePicker className="date-picker" selected={startDate} onChange={date => setStartDate(date)} />
                <p>Pick Up Date</p>
            </div>
            <div className="drop-off">
                <DatePicker className="date-picker" selected={startDate} onChange={date => setStartDate(date)} />
                <p>Dropping Date</p>
            </div>
        </div>
    );
};

export default TopBanner;