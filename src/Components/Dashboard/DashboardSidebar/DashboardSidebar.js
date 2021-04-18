import { Link } from 'react-router-dom';
import './Sidebar.css';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faBook, faStreetView, faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useContext, useEffect, useState } from 'react';

const DashboardSidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setAdmin] = useState(false);

    useEffect(()=> {
        fetch('http://localhost:4000/isAdmin',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setAdmin(data))
    }, [])
   

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
                </li>
                {isAdmin &&<li>
                    <Link to="/admin"><FontAwesomeIcon icon={faUser} /> Admin</Link>
                </li>}
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