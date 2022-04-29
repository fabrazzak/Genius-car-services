import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import facebook from '../../images/social/facebook.png'
import google from '../../images/social/google.png'
import github from '../../images/social/github.png'
import SocialLogin from '../SocialLogin/SocialLogin';

const Signin = () => {
    
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        error
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


   
    const handleNavigateLogin = () => {
        navigate('/login');
    }
    const handleFormSignSubmit = async (event)=> {
        event.preventDefault();
        const displayName= event.target.displayName.value;
        const email=event.target.email.value;
        const password= event.target.password.value;
       await createUserWithEmailAndPassword(email,password);
        await updateProfile({ displayName});
        navigate('/home');

            
    }

    return (
        <div className='container my-5 py-5 w-25 '>
            <Form onSubmit={handleFormSignSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="displayName" className='py-3 fs-4' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" className='py-3 fs-4' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='py-3 fs-4' name="password" type="password" placeholder="Password" required />
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                   
                </Form.Group>
                <Button variant="primary" type="submit" className='btn-lg d-flex justify-content-center mx-auto  my-4'>
                    Signin
                </Button>
                <p className='fs-5 cursor-pointer' role='button' tabIndex='0' onClick={handleNavigateLogin}>Al Ready Register? <span className='text-danger'>Login now.</span></p>
            </Form>
           <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signin;