import React, { useRef } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './login.css'

import LoadingPages from '../LoadingPages/LoadingPages';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user, loading, error
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <LoadingPages></LoadingPages>
    }

    let errorMessage;
    if (error) {
        errorMessage = <div>
            <p className='text-danger fs-5'>Error: {error?.message}</p>
        </div>

    }

    const handleFormLoginSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        fetch('https://blooming-stream-64870.herokuapp.com/login',{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify({email})
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('accessToken', data.accessToken);
            navigate(from, { replace: true });
            console.log(data);
        })}
      

    const handleNavigateRegister = () => {
        navigate('/signin');

    }


    return (
        <div className='container my-5 py-5 w-25 '>
            <Form onSubmit={handleFormLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" ref={emailRef} className='py-3 fs-4' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='py-3 fs-4' ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {errorMessage}
                </Form.Group>
                <Button variant="primary" type="submit" className='btn-lg d-flex justify-content-center mx-auto  my-4'>
                    Login
                </Button>
                <p className='fs-5' role='button' tabIndex='0' onClick={handleNavigateRegister}>New to Genius car? <span className='text-primary'>Register now.</span></p>
            </Form>
            <SocialLogin></SocialLogin>


        </div>
    );
};

export default Login;