import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCartPlus, faBook, faStreetView, faHome } from '@fortawesome/free-solid-svg-icons';

const DashboardSidebar = () => {

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
                </li>
                <li>
                    <Link to="/dashboard/book">
                        <FontAwesomeIcon icon={faCartPlus} /> Book
                    </Link>
                </li>
                <li>
                    <Link to="/bookings">
                        <FontAwesomeIcon icon={faBook} /> Booking List
                    </Link>
                </li>
                <li>
                    <Link to="/review">
                        <FontAwesomeIcon icon={faStreetView} /> Review
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default DashboardSidebar;