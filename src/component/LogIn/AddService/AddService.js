import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch("http://localhost:5000/services", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Added Service Sucessfully")
                    reset()
                }
            console.log(data);
        })
    };
    return (
        <div>
            <h1>Add New Service</h1>
            <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-3 p-2 w-25 border border-info rounded-3" placeholder="Provide a Name" {...register("name")} />
                <br />
                <input className="mb-3 p-2 w-25 border border-info rounded-3" placeholder="Provide an Email" {...register("email")} />
                <br />
                <input className="mb-3 p-2 w-25 border border-info rounded-3" placeholder="Provide Short Des" {...register("des")} />
                <br />
                <input className="mb-3 p-2 w-25 border border-info rounded-3" placeholder="Provide img url" {...register("img")} />
                <br />
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddService;