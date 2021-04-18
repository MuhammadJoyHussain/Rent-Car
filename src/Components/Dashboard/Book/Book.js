import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import './Book.css'
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { useParams } from 'react-router';

const Book = () => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [service, setService] = useState([]);
    const [shippingData, setShippingData] = useState(null);

    useEffect(() => {
        if (!service) {
            fetch(`http://localhost:4000/${id}`)
                .then(res => res.json())
                .then(data => setService(data))
        }
    }, []);

    const onSubmit = data => {
        setShippingData(data);
    };


    const handlePaymentSuccess = paymentId => {
        const orderDetails = {
            ...loggedInUser,
            product: service,
            shipping: shippingData,
            paymentId,
            orderTime: new Date()
        }

        fetch('http://localhost:4000/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
    }

    return (
        <div>
            <div><DashboardSidebar /></div>
            <div className="book">
                <div style={{ display: shippingData ? 'none' : 'block' }} className="ship">
                    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

                        <input {...register("name", { required: true })} defaultValue={loggedInUser.name} placeholder="Your Name" />
                        {errors.name && <span className="error">This field is required</span>}

                        <input {...register("email", { required: true })} defaultValue={loggedInUser.email} placeholder="Your Email" />
                        {errors.email && <span className="error">This field is required</span>}

                        <input {...register("address", { required: true })} defaultValue={loggedInUser.address} placeholder="Your Address" />
                        {errors.address && <span className="error">This field is required</span>}

                        <input {...register("phone", { required: true })} defaultValue={loggedInUser.phone} placeholder="Your Phone Number" />
                        {errors.phone && <span className="error">This field is required</span>}
                        <br/>
                        <button className="btn-style" type="submit">Submit </button>
                    </form>
                </div>
                <div className="credit-area" style={{ display: shippingData ? 'block' : 'none' }}>
                    <h1 style={{marginLeft:"20px"}}>Payment</h1>
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
        </div>
    );
};

export default Book;