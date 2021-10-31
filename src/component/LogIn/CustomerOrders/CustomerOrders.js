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
    
    // console.log(orders);
    return (
        <div>
            <h1>My Orders or Customer Oders {orders.length}</h1>
            {
                orders.map(order => <div>
                    <p>Name: {order.userName}</p>
            <p>Des { order.address}</p>
                </div>)
            }
        </div>
    );
};

export default CustomerOrders;