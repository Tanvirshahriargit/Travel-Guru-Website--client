import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const BookingServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div>
            <h1>Most Popular Packages</h1>
            {
                services.map(service => <div>
                    <div class="card-group">
                        <div class="card">
                            <img src={ service.img} class="card-img-top" alt="..."/>
                            <div class ="card-body">
                            <h5 class ="card-title">Card title</h5>
                            <p class ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                            <div class ="card-footer">
                            <small class ="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default BookingServices;