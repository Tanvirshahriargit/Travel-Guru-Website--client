import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("https://haunted-eyeballs-76205.herokuapp.com/customers")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            })
    }, [])

    // Delete Orders
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
    return (
        <div>
            <h2 className="text-primary mt-2">Manage All Orders :{orders.length}</h2>
            <hr className="mx-auto w-25 border border-1 border-primary" />
            <div className="row gx-0 gy-4 p-4">
                {
                    orders.map(mangeorder => <div key={mangeorder._id} className="col-12 col-md-4 pe-4">
                        <Card>
                            <Card.Img variant="top" src={mangeorder.img} />
                            <Card.Body>
                                <Card.Title><i className="fas fa-user-circle me-2"></i>Name: {mangeorder.userName}</Card.Title>
                                <Card.Text>
                                    <p><i className="fas fa-map-marked-alt text-success me-2"></i>Location: {mangeorder.location}</p>
                                </Card.Text>
                                <Card.Text>
                                    <p><i className="fas fa-dollar-sign text-primary me-1"></i>{mangeorder.price}</p>
                                </Card.Text>
                                <Card.Text>
                                    <p><i className="fas fa-location-arrow me-2"></i>Address: {mangeorder.address }</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <button onClick={() => handleDelete(mangeorder._id)} className='btn btn-danger'><i className="fas fa-trash-alt me-2"></i>Detete Customer Order</button>
                            </Card.Footer>
                        </Card>
                    </div>)
                }

            </div>

        </div>
    );
};

export default ManageAllOrders;