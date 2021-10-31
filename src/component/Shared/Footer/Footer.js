import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../../logo.png"

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container">

                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4">
                        {/* logo and about sections */}
                        <img className="mt-2" src={Logo} alt="" />
                        <p className='text-light mt-3'>Best travel agency websites are a great source of information for travelers.The most significant advantage of a travel website is that it gives you a chance to present</p>

                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        {/* footer Pages sections */}
                        <h4 className="text-light mt-2">Pages</h4>
                        <p><NavLink className="link text-light" to="/home">Home</NavLink></p>
                        <p><NavLink className="link text-light" to="/booking/:id">Booking</NavLink></p>
                        <p><NavLink className="link text-light" to="/contact">Contact Us</NavLink></p>
                        <p><NavLink className="link text-light" to="/about">About</NavLink></p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        {/* footer location section*/}
                        <div>
                            <h4 className="text-light text-start mt-2">Location</h4>
                            <div className="d-flex mt-2">
                                <div><p><i className="fa fa-location-arrow text-light"></i></p></div>
                                <div className="ms-3 text-light">
                                    <h6>
                                    oldTower,London
                                    <br />
                                    bonex5678,UK </h6>
                                </div>
                            </div>
                            <div className="d-flex mt-2">
                                <div><p><i className="fas fa-phone-alt text-light"></i></p></div>
                                <div className="ms-3 text-light">
                                <h6> +443125479 </h6>
                                </div>
                            </div>
                            <div className="d-flex mt-2">
                                <div><p><i className="fa fa-envelope text-light" aria-hidden="true"></i></p></div>
                                <div className="ms-3 text-light">
                                <h6> hello@travelguru.com </h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <hr className="text-primary" />
                {/* footer button */}
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-8">
                        {/* footer copywrites section */}
                        <p variant="white" className="pt-4 text-light">© 2021 travelGuru. All Rights Reserved.</p>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        {/* Icons sections */}
                        <p className='text-dark fs-4 m-3'><i className="fab fa-instagram text-light"></i><i className="fab fa-facebook ms-2 text-light"></i><i className="fab fa-youtube ms-2 text-light"></i><i className="fab fa-linkedin ms-2 text-light"></i></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;