import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BookingInformation = () => {
    const { id } = useParams();
    const [customer, setCustomer] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data =>{
            setCustomer(data)
        })
    },[])
    return (
        <div>
            <h1>Provide Your Bokking Information Where You to go {id}</h1>
            <h2>Name{ customer.name}</h2>
        </div>
    );
};

export default BookingInformation;