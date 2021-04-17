import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css'

const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    return (
        <section>
            <div className="services">
                <h1>We Provide Many Rental Services</h1>
            </div>
            <div className="service-area">
            {
                service.map(service => <ServiceDetail service={service} />)
            }
            </div>
        </section>
    );
};

export default Services;