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
            <h2 className="text-primary my-2">My Orders : {orders.length}</h2>
            <hr className="mx-auto w-25 border border-1 border-primary" />
            <div className="row gx-0 gy-4 p-4">
                {
                    orders.map(order => <div key={order._id} className="col-12 col-md-6 pe-4">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <img src={order.img} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="card-title"><i className="fas fa-user-circle me-2"></i>Name: {order.userName}</h5>
                                        <p><i className="fas fa-map-marked-alt text-success me-2"></i>{order.location}</p>
                                        <p> <i className="fas fa-dollar-sign text-primary me-1"></i>{ order.price}</p>
                                        <p className="card-text"><i className="fas fa-mobile me-2"></i>{order.phoneNumber}</p>
                                        <button onClick={() => handleDelete(order._id)} className='btn btn-danger'><i className="fas fa-trash-alt me-2"></i>Detete Order</button>
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