import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from "../../../logo.png"
import "./Header.css"

const Headers = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" className="text-warning" sticky="top">
                <Container>
                    {/* Logo  */}
                    <img src={ Logo} alt="" />
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <NavLink className="link" to="/home">Home</NavLink>
                            <NavLink className="link" to="/booking">Booking</NavLink>
                            <NavLink className="link" to="/contact">Contact Us</NavLink>
                            <NavLink className="link" to="/about">About</NavLink>
                        </Nav>
                        {/* Right sections Login and Register */}
                        <Nav className="d-flex mx-auto justify-content-end align-items-center">
                        
                                <Button className="btn rounded-pill m-3 ms-0" onClick="">Logout <i class="fas fa-sign-out-alt"></i></Button>
                                <NavLink className="link m-3 ms-0" to="/login">Log In</NavLink>
                                <NavLink className="link m-3 ms-0" to="/myorders">My Orders</NavLink>
                                <NavLink className="link m-3 ms-0" to="/manageorders">Manage Orders</NavLink>
                                <NavLink className="link m-3 ms-0" to="/addservice">Add Service</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Headers;