import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Manage = ({product}) => {
    const deleteProduct = () => {
        fetch(`http://localhost:4000/deleteService/${product._id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            const product = document.getElementById('product')
            product.style.display = 'none';
        })
    }

    return (
        <div id="product" className="product">
            <h3>Service: {product.event}</h3>
            <button onClick={() => deleteProduct(product._id)}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    );
};

export default Manage;