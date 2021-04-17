import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import Manage from './Manage';
import './Manage.css'

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

        useEffect(() => {
            fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setProducts(data))
        }, [])

    return (
        <div>
            <div><AdminSidebar /></div>
            <div className="products">
            {
                products.map(product => <Manage product={product} />)
            }
            </div>
        </div>
    );
};

export default ManageProducts;