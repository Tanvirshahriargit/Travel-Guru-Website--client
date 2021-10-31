import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const CustomerOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://haunted-eyeballs-76205.herokuapp.com/customers/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            })
    }, [user?.email])

    // handleDelete orders
    const handleDelete = (id) => {
        const deteteProcess = window.confirm("Are You Sure You Want To Deted This Orde")
        if (deteteProcess) {
            const url = `https://haunted-eyeballs-76205.herokuapp.com/customers/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        alert("Deteted Order Successfully")
                        const orderRemaining = orders.filter(order => order._id != id)
                        setOrders(orderRemaining)
                    }
                })
        }
    }

    // console.log(orders);
    return (
        <div>
            <h2 className="text-primary">My Orders : {orders.length}</h2>
            <hr className="mx-auto w-25 border border-1 border-primary" />
            <div className="row">
                {
                    orders.map(order => <div className="col-12 col-md-6">
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-6">
                                    <img src={order.img} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body">
                                        <h5 class="card-title">Name: {order.userName}</h5>
                                        <p class="card-text">Eamil: {order.email}</p>
                                        <p class="card-text">Number:{order.phoneNumber}</p>
                                        <button onClick={() => handleDelete(order._id)} className='btn btn-danger'>Detete Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default CustomerOrders;