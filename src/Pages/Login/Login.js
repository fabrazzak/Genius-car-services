import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    
    const handleFormLoginSubmit =event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        console.log(email, password);

    }
    const navigate=useNavigate();
    const handleNavigateRegister=()=>{
        navigate('/signin');

    }
    return (
        <div className='container my-5 py-5 w-25 '>
            <Form onSubmit={handleFormLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" ref={emailRef} className='py-3 fs-4' placeholder="Enter email"  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='py-3 fs-4' ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className='btn-lg mb-3'>
                    Submit
                </Button>
                <p className='fs-5' role='button' tabIndex='0' onClick={handleNavigateRegister}>New to Genius car? <span className='text-danger'>Register now.</span></p>
            </Form>
        </div>
    );
};

export default Login;