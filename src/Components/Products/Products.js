import React from 'react';
import { Card, Col } from 'react-bootstrap';

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
                            <Link to={`/servicedetails/${id}`}><Button variant="warning">Place Order</Button>{' '}</Link>

                        </Card.Body>
                    </Card>
                </Col>
            }
        </div>
    );
};

export default Products;