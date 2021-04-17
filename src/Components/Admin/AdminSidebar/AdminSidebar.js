import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBox, faCartPlus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import '../../Dashboard/DashboardSidebar/Sidebar.css'

const AdminSidebar = () => {
    return (
        <div className="sidebar">
            <li>
                <Link to="/admin/order">
                    <FontAwesomeIcon icon={faCartPlus} /> Order List
                </Link>
            </li>
            <li>
                <Link to="/product">
                    <FontAwesomeIcon icon={faPlus} /> Add Product
                </Link>
            </li>
            <li>
                <Link to="/admin">
                    <FontAwesomeIcon icon={faUser} /> Add Admin
                </Link>
            </li>
            <li>
                <Link to="/manage">
                    <FontAwesomeIcon icon={faBox} /> Manage Product
                </Link>
            </li>
        </div>
    );
};

export default AdminSidebar;