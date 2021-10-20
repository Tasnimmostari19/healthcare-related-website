import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div id='services'>
            <br />
            <h2 className='m-5 text-primary'>Services</h2>

            <Row xs={2} md={4} className="g-4 m-4">

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>



        </div>
    );
};

export default Services;