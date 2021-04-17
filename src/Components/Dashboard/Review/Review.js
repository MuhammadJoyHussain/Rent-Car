import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import './Review.css'

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ imageURL, setImageURL ] = useState();

    const onSubmit = data =>{
        const reviewData = {
            name: data.name,
            designation: data.designation,
            discription: data.discription,
            imageURL: imageURL
        };
        fetch('http://localhost:4000/addReview', {
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
    }

    const handleImageUpload = event =>{
        const imageData = new FormData();
        imageData.set('key', '276e38607418b71dbccaa1914a781df8');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(res => {
          setImageURL(res.data.data.display_url);
        })
        .then(err =>{

        })

    }
    
    

    return (
        <div>
            <div><DashboardSidebar /></div>
            <div className="form-area">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h1>Review</h1>
                    <input style={{width:"400px", height:"40px"}} {...register("name", { required: true })} placeholder="Your Name" />
                    {errors.name && <span>This field is required</span>}
                    <br/>
                    <input style={{width:"400px", height:"40px"}} {...register("designation", { required: true })} placeholder="Company's Name, Designation" />
                    {errors.designation && <span>This field is required</span>}
                    <br/>
                    <input style={{width:"400px", height:"100px"}} {...register("discription", { required: true })} placeholder="Description" />
                    {errors.discription && <span>This field is required</span>}
                    <br/>
                    <input style={{width:"400px", height:"100px"}} {...register("img", { required: true })} type="file" onChange={handleImageUpload} />
                    {errors.img && <span>This field is required</span>}
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Review;