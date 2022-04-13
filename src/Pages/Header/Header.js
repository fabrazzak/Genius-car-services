import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navLogo from '../../images/logo.png'

const Header = () => {
    return (
        <Navbar bg="primary" variant="light ">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={navLogo} height='50' alt='nav-log'/>
                </Navbar.Brand>
                <Nav className="mx-auto">
                    <Nav.Link className='text-white ms-3 fs-5 fw-bold' href="#home">Home</Nav.Link>
                    <Nav.Link className='text-white ms-3 fs-5 fw-bold' href="#features">About</Nav.Link>
                    <Nav.Link className='text-white ms-3 fs-5 fw-bold' href="#pricing">login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;