import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { auth, provider } from './firebase';
import "./Login.css"
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
const Login = () => {
    const [{}, dispatch] = useStateValue();
    const [error, setError] = useState("")
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                setError("")
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });

    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.ibb.co/7SLztzD/Messenger-logo-premium-vector-PNG-removebg-preview.png" alt="" />

                <div className="login__text">
                    <h1>Sign in to Text-Me</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
                <p className='error__meassage'>{error}</p>
            </div>
        </div>
    );
};

export default Login;