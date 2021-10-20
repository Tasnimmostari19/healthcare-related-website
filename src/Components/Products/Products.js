import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = ({ product }) => {
    const { name, price, img } = product;
    return (
        <div>
            {
                <Col>
                    <Card className='service'>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <p>
                                Price: {price}
                            </p>
                            <Button variant="warning">Place Order</Button>{' '}

                        </Card.Body>
                    </Card>
                </Col>
            }
        </div>
    );
};

export default Products;