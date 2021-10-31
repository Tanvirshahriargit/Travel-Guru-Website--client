import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Logo from "../../../logo.png"
import "./Header.css"

const Headers = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" className="text-warning" sticky="top">
                <Container>
                    {/* Logo  */}
                    <img className="img-fuild p-2" src={Logo} alt="" />

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <NavLink className="link" to="/home">Home</NavLink>
                            <NavLink className="link" to="/booking/:id">Booking</NavLink>
                            <NavLink className="link" to="/contact">Contact Us</NavLink>
                            <NavLink className="link" to="/about">About</NavLink>
                        </Nav>
                        {/* Right sections Login and Register */}
                        <Nav className="d-flex mx-auto justify-content-end align-items-center">
                            
                            {user?.email && <NavLink className="link m-3 ms-0" to="/myorders">My Orders</NavLink>}
                            {user?.email && <NavLink className="link m-3 ms-0" to="/manageorders">Manage Orders</NavLink>}
                            {user?.email && <NavLink className="link m-3 ms-0" to="/addservice">Add A Service</NavLink>}        
                            
                            {
                                user?.email ?
                                    <Button className="btn rounded-pill m-3 ms-0" onClick={logOut}>Logout <i className="fas fa-sign-out-alt"></i></Button> :

                            <NavLink className="link m-3 ms-0" to="/login">Log In</NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Headers;