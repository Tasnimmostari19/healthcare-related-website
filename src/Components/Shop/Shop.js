import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Products from '../Products/Products';


const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Tasnimmostari19/service-data/main/Product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h2><span className='text-primary'>SH</span>op</h2>
            <Row xs={2} md={4} className="g-4 m-4">
                {
                    products.map(product => <Products
                        key={product.name}
                        product={product}

                    ></Products>)
                }
            </Row>
        </div>
    );
};

export default Shop;