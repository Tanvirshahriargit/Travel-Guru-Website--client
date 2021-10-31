import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import BookingServices from './BookingServices/BookingServices';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookingServices></BookingServices>
            <About></About>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;