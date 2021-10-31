import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookingServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://haunted-eyeballs-76205.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div>
            <h1 className="text-primary mt-3"><i className="fas fa-cubes me-2 text-dark"></i>Most Popular Packages</h1>
            
            <Row xs={1} md={3} className="gx-0 gy-4 p-4">
            {
                services.map(service =>
                    <Col key={service._id} className="p-3">
                        <Card>
                            <Card.Img variant="top" src={service.img} />
                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                                <Card.Text>
                                    <p><i className="fas fa-map-marked-alt text-success"></i> {service.location}</p>
                                </Card.Text>
                                <Card.Text>
                                    <p><i className="fa fa-star text-warning me-2" aria-hidden="true"></i>4.5</p>
                                </Card.Text>
                                <Card.Text>
                                    <p>Price <i className="fas fa-dollar-sign text-primary"></i>{service.price}</p>
                                </Card.Text>
                                <Card.Text>
                                    {service.des}
                                </Card.Text>
                            </Card.Body>
                            <Link to={`/booking/${service._id}`}><Button className="mb-4">Plan a Trip<i className="fas fa-cart-arrow-down ms-1"></i></Button></Link>
                        </Card>
                    </Col>
                )
            }            
            </Row>

        </div>
    );
};

export default BookingServices;