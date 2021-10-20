import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';


const ServiceDetails = () => {

    const { serviceId } = useParams();

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Tasnimmostari19/service-data/main/Services.json')
            .then(res => res.json())
            .then(data => {
                const service = data.find(service => service.id == serviceId)
                console.log('this is details', service);
                setServices(service);
            })

    }, [serviceId])





    return (
        <div>
            <div className='m-5 p-5'>
                <Image src={services.img} fluid />
                <h3>{services.name}</h3>
                <h6>{services.description}</h6>
            </div>


        </div>
    );
};

export default ServiceDetails;

