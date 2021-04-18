import React from "react";
import Navbar from '../../Shared/Navbar/Navbar';
import "react-datepicker/dist/react-datepicker.css";
import './TopBanner.css'

const TopBanner = () => {
    


    return (
        <div className="banner-area">
            <div><Navbar /></div>
            <div className="banner">
            <h1>We Provide Rental Cars In Best Price</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ratione doloribus sapiente asperiores sunt aut numquam illo ducimus tenetur veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque sit vero nobis minus ea. Tempora quidem saepe veritatis dolor.</p>
            <button className="btn-style">More Information</button>
            </div>
        </div>
    );
};

export default TopBanner;