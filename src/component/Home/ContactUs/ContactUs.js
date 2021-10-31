import React from 'react';
import "./ContactUs.css"

const ContactUs = () => {
    return (
        <div>
            <h1 className=" mb-2">Contact <span className="text-primary">Us</span></h1>
            <hr className="mx-auto w-25 border border-1 border-primary" />
            <div className="row container">
                <div className="col-12 col-md-6 col-lg-6">
                    {/* left section */}
                    <div className="m-2">
                        <h5 className="text-start">Contact Us</h5>
                        <h1 className="text-primary text-start">Stay with us</h1>
                        <div className="d-flex mt-4">
                            <div><p><i className="fa fa-location-arrow"></i></p></div>
                            <div className="ms-3">
                                <h6>
                                    GoldTower,London
                                    <br />
                                    bonex5678,UK </h6>
                            </div>
                        </div>
                        <div className="d-flex mt-4">
                            <div><p><i className="fas fa-phone-alt"></i></p></div>
                            <div className="ms-3">
                                <h6> +443125479 </h6>
                            </div>
                        </div>
                        <div className="d-flex mt-4">
                            <div><p><i className="fa fa-envelope" aria-hidden="true"></i></p></div>
                            <div className="ms-3">
                                <h6> hello@travelguru.com </h6>
                            </div>
                        </div>

                    </div>
                </div>
                {/* right section */}
                <div className="col-12 col-md-6 col-lg-6">
                    <form className="contact-form">
                        <div className="input-form">
                            <input className="mb-3 p-2 w-50 border border-info rounded-3" type="text" id="input-name" placeholder="Name" />
                            <br />
                            <input className="mb-3 p-2 w-50 border border-info rounded-3" type="email" id="input-email" placeholder="Email address" />
                            <br />
                            <input className="mb-3 p-2 w-50 border border-info rounded-3" type="text" id="input-subject" placeholder="Subject" />
                        </div>
                        <div className="half right cf input-form">
                            <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
                        </div>
                        <input className="btn btn-primary mt-3" type="submit" value="Submit" id="input-submit" />
                    </form>
                </div>
                <div className="row container">
                    <div className="col-lg-6 col-md-6 col-12 mb-3 mx-auto">
                        <div>
                            <h2 className="text-center  mt-3"><i class="fas fa-search-location text-primary"></i> Our Location In Map</h2>
                            <hr className="mx-auto w-75 border border-1 border-primary" />
                            <div className="fluid container"> <iframe width="500vh" height="400vh" src={"https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href={"https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"}> </a></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;