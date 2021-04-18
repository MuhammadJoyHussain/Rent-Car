import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import OrderDetails from './OrderDetails';

const OrderedList = () => {
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/orders')
        .then(res=>res.json())
        .then(data => setOrderList(data))
    }, [])

    return (
        <div>
            <div><AdminSidebar/></div>
            <div>
            {
                orderList.map( orders => <OrderDetails orders={orders} />)
            }
            </div>
        </div>
    );
};

export default OrderedList;