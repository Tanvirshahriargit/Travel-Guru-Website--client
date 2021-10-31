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
            <h1>Most Popular Packages</h1>
            
            <Row xs={1} md={3} className="gx-0 gy-4 p-4">
            {
                services.map(service =>
                    <Col className="p-3">
                        <Card>
                            <Card.Img variant="top" src={service.img} />
                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                                <Card.Text>
                                    {service.des}
                                </Card.Text>
                            </Card.Body>
                            <Link to={`/booking/${service._id}`}><Button>Plan a Trip</Button></Link>
                        </Card>
                    </Col>
                )
            }            
            </Row>

        </div>
    );
};

export default BookingServices;