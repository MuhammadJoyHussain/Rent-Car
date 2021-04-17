import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import './Book.css'
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import { UserContext } from '../../../App';

const Book = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState(null);

    const onSubmit = data => {
        
        fetch('http://localhost:4000/addOrder',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())

    };


    const handlePaymentSuccess = paymentId => {
       
    }

    return (
        <div>
            <div><DashboardSidebar /></div>
            <div className="book">
                <div>
                    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                      
                        <input {...register("name", { required: true })} defaultValue={loggedInUser.name} placeholder="Your Name" />
                       {errors.name && <span className="error">This field is required</span>}
                        
                        <input {...register("email", { required: true })} defaultValue={loggedInUser.email} placeholder="Your Email" />
                       {errors.email && <span className="error">This field is required</span>}
                        
                        <input {...register("address", { required: true })} defaultValue={loggedInUser.address} placeholder="Your Address" />
                       {errors.address && <span className="error">This field is required</span>}
                        
                        <input {...register("phone", { required: true })} defaultValue={loggedInUser.phone} placeholder="Your Phone Number" />
                       {errors.phone && <span className="error">This field is required</span>}

                        <button type="submit">Submit </button>
                    </form>
                </div>
                {/* <div style={{ display: shippingData ? 'block' : 'none' }}>
                    <h1>Please pay for me</h1>
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div> */}
            </div>
        </div>
    );
};

export default Book;