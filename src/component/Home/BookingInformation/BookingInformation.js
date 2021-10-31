import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import { Card } from 'react-bootstrap';

const BookingInformation = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const [customer, setCustomer] = useState({})

    useEffect(() => {
        fetch(`https://haunted-eyeballs-76205.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setCustomer(data)
            })
    }, [])
    const onSubmit = data => {
        data.email = user?.email;
        console.log(data)
        fetch("https://haunted-eyeballs-76205.herokuapp.com/customers", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Purchase Your order Sucessfully")
                    reset()
                }
                console.log(data);
            })

    };
    return (
        <div>
            <h1>Provide Your Bokking Information Where You to go {id}</h1>
            <h2>Name {customer.name}</h2>
            <Card>
                <Card.Img variant="top img-fluid" src={customer.img} />
                <Card.Body>
                    <Card.Text>
                        {  customer.name}
                    </Card.Text>
                    <Card.Text>
                        { customer.des}
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Purches Form */}
            <h1 className="text-primary">Purches Your Odrer Where are you go</h1>
            <hr className="w-25 mx-auto" />
            <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-3 p-2 w-25 border border-info rounded-3" value={user?.displayName} placeholder="User a Name" {...register("userName")} />
                <br />
                <input className="mb-3 p-2 w-25 border border-info rounded-3" placeholder="User an Email" value={user?.email} {...register("email")} />
                <br />
                <input className="mb-3 p-2 w-25 border border-info rounded-3" placeholder="Provide Your Phone Number" {...register("phoneNumber")} />
                <br />
                <input className="mb-3 p-2 w-25 border border-info rounded-3" placeholder="Provide Your Adress" {...register("address")} />
                <br />
                <input className="btn btn-primary" value="Purches Now" type="submit" />
            </form>
        </div>
    );
};

export default BookingInformation;