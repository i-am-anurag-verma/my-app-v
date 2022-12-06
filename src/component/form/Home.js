import React from 'react'
import Button from './Button';
import '../form/home.css'
import { useState, useEffect } from 'react';
import RegistrationForm from '../../Tasks/RegistrationForm';
import Login from './Login';



const Home = () => {

    const [isSignup, setIsSignup] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            setIsSignup(false)
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if (isSignup) {
            setIsLoggedIn(false)
        }
    }, [isSignup])

    return (
        <div className='container'>
            <h1>
                <a className="brand" href="#">Home</a>
            </h1>
            <div className="flex">
                <Button className='flex-child' isDisabled={isSignup} onClick={() => setIsSignup(!isSignup)}>Signup</Button>

                <Button className='flex-child' isDisabled={isLoggedIn} onClick={() => { setIsLoggedIn(!isLoggedIn) }} >Login</Button>
            </div>
            {isSignup && (
                <RegistrationForm />
            )}

            {isLoggedIn && (
                <Login />
            )}
        </div>

    )
}

export default Home;