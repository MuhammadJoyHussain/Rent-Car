import React, { useEffect, useState } from 'react';

import Testimonials from './Testimonials';


const Testimonial = () => {
    const [review, setReview] = useState([])
   
    useEffect(() => {
        fetch('http://localhost:4000/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])

    return (
        <section className="testimonials">
            <div className="inner">
                <h1>Customer Reviews</h1>
                <div className="border"></div>
                <div className="row">
                    {
                        review.map(reviews => <Testimonials reviews={reviews} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;