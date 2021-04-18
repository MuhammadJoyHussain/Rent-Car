import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AvailableOn from '../AvailableOn/AvailableOn';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import TopBanner from '../TopBanner/TopBanner';
import TopHeader from '../TopHeader/TopHeader';


const Home = () => {
    return (
        <div>
            <TopBanner />
            <TopHeader />
            <Services />
            <Testimonial />
            <AvailableOn />
            <Footer />
        </div>
    );
};

export default Home;