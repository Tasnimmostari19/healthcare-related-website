import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';


const ServiceDetails = () => {

    const { serviceId } = useParams();

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Tasnimmostari19/service-data/main/Services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [serviceId])


    const service = services.find(service => service.id == serviceId);

    console.log('service', service);

    // const { name, img, description } = service[0];

    // console.log('detail', name);



    return (
        <div>
            <h1>This is {serviceId}</h1>
            <div>
                {/* <Image src={img} fluid />
                <h3>{name}</h3>
                <h6>{description}</h6> */}
            </div>


        </div>
    );
};

export default ServiceDetails;

