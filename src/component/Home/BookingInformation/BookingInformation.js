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
        data.location = customer?.location;
        data.price = customer?.price;
        data.img = customer?.img;
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
            <h3 className="text-primary my-2">See Details and Provide Your Booking Information</h3>
            <hr className="mx-auto w-25 border border-1 border-primary" />
            <Card>
                <Card.Img variant="top img-fluid" src={customer.img} />
                <Card.Body>
                    <Card.Text>
                        <h1> {customer.name}</h1>
                    </Card.Text>
                    <Card.Text>
                        <h4><i className="fas fa-map-marked-alt text-success me-2"></i>{customer.location}</h4>
                    </Card.Text>
                    <Card.Text>
                        <p>Price <i className="fas fa-dollar-sign text-primary"></i>{customer.price}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>{customer.des}</p>
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Purches Form */}
            <h1 className="text-primary">Purches Your Odrer</h1>
            <hr className="w-25 mx-auto" />
            <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-3 p-2 w-25 border border-info rounded-3" value={user?.displayName} placeholder="User a Name" {...register("userName")} />
                <br />
                <input className="mb-3 p-2 w-25 border border-info rounded-3" placeholder="User an Email" value={user?.email} {...register("email")} />
                <br />
                <input className="mb-3 p-2 w-25 border border-info rounded-3" placeholder="Provide Your Location you to go" value={customer.location}  {...register("location")} />
                <br />
                <input className="mb-3 p-2 w-25 border border-info rounded-3" placeholder="Provide an image url" value={ customer.img} {...register("img")} />
                <br />
                <input className=" mb-3 p-2 w-25 border border-info rounded-3" placeholder="Max Price" value={customer.price} {...register("price")} />
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