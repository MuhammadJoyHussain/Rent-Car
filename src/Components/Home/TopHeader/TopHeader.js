import React from 'react';
import { Link } from 'react-router-dom';
import car from '../../../Images/car.jpg'
import './TopHeader.css'

const TopHeader = () => {
    return (
        <div>
            <main className="main">
            <div className="text-area">
                <h1>We Don't Want You To Be <br/> Late To Reach Any Location</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/> Voluptatibus, fuga accusantium esse voluptatum a fugiat, <br/> commodi dolorum, perferendis ipsa temporibus maiores rerum! <br/> Sapiente aliquam obcaecati culpa tempore fugit voluptatem. <br/> Reiciendis, consequuntur odio. Soluta non laboriosam doloremque <br/> consectetur ducimus quis omnis!</p>
                <Link to="/rent"><button className="btn-style">GET A RENT CAR</button></Link>
            </div>
            <div className="img-area" >
                <img src={car} />
            </div>
        </main>
        </div>
    );
};

export default TopHeader;