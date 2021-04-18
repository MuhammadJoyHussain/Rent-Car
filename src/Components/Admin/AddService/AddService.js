import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ imageURL, setImageURL ] = useState();

    const onSubmit = data => {
        const serviceData = {
            event: data.event,
            vehicle: data.vehicle,
            price: data.price,
            imageURL: imageURL
        };

        fetch('http://localhost:4000/addService', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(serviceData)
        })
        .then(res => res.json())
      };

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
            <div><AdminSidebar /> </div>
            <div className="service">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <h1>Add A Service</h1>
                    <input {...register("event", { required: true })} placeholder="Event Name" />
                    {errors.event && <span>This field is required</span>}
                    <br/>
                    <input {...register("vehicle", { required: true })} placeholder="Vehicle Name" />
                    {errors.vehicle && <span>This field is required</span>}
                    <br/>
                    <input type="int" {...register("price", { required: true })} placeholder="Price" />
                    {errors.price && <span>This field is required</span>}
                    <br/>
                    <input {...register("img", { required: true })} type="file" onChange={handleImageUpload} />
                    {errors.img && <span>This field is required</span>}
                    <br/>
                    <button className="btn-style" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;