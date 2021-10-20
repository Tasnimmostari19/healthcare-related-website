import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = ({ service }) => {
    const { name, img, description, id } = service;


    return (
        <div>
            {
                <Col>
                    <Card className='service'>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <p>
                                {description}
                            </p>
                            <Link to={`/servicedetails/${id}`}><Button variant="warning">Details</Button>{' '}</Link>

                        </Card.Body>
                    </Card>
                </Col>
            }

        </div>
    );
};

export default Service;