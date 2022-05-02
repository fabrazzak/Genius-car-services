import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import navLogo from '../../images/logo.png'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleLogOut = () => {

        signOut(auth);


    }
    return (
        <Navbar bg="dark" className='navbar-dark py-3 fs-5' sticky='top' expand="lg" >
            <Container  >
                <Navbar.Brand >
                    <img src={navLogo} height="40"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}

                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                      
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#experts">Expert</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}

                    >
                        <Nav.Link as={Link} to="about" className='d-flex align-items-center'>About</Nav.Link>
                        {
                            user ? <><Nav.Link as={Link} to="/add-service" className='d-flex align-items-center'>Add-service</Nav.Link>
                                <Nav.Link as={Link} to="/manage" className='d-flex align-items-center'>Manage</Nav.Link>
                                <Nav.Link as={Link} to="/orders" className='d-flex align-items-center'>Orders</Nav.Link>
                            </> : "" 
                        }
                        {
                            user ? < Nav.Link as={Link} to="login" onClick={handleLogOut}>Log Out
                                <img className=' ms-3 rounded rounded-circle' height="50px" src={user.photoURL} alt="" />
                            </Nav.Link>
                                :
                                <Nav.Link as={Link} to="login" >Login</Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;