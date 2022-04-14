import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Signin = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
    ] = useCreateUserWithEmailAndPassword(auth);
   
    const handleNavigateLogin = () => {
        navigate('/login');
    }
    const handleFormSignSubmit = event => {
        event.preventDefault();
        const name= event.target.name.value;
        const email=event.target.email.value;
        const password= event.target.password.value;
        createUserWithEmailAndPassword(email,password,name);
      
    }
   



    return (
        <div className='container my-5 py-5 w-25 '>
            <Form onSubmit={handleFormSignSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="name" className='py-3 fs-4' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" className='py-3 fs-4' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='py-3 fs-4' name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <p>{error}</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className='btn-lg'>
                    Submit
                </Button>
                <p className='fs-5 cursor-pointer' role='button' tabIndex='0' onClick={handleNavigateLogin}>Al Ready Register? <span className='text-danger'>Login now.</span></p>
            </Form>
        </div>
    );
};

export default Signin;