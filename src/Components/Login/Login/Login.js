import firebase from "firebase/app";
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { UserContext } from "../../../App";
import './login.css'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser)
                storeAuthToken();
            })
            .catch(err => {
                const errMessage = err.message;
                console.log(errMessage);
            })
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(idToken => {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            })
            .catch(err => {

            })
    }

    return (

        <div className="login-btn">
            <i onClick={handleGoogleSignIn} className="fab fa-google">Login with Google</i>
        </div>
    );
};

export default Login;