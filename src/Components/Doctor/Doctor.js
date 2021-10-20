import React from 'react';
import { Col, Image } from 'react-bootstrap';

const Doctor = ({ doctor }) => {
    const { name, img } = doctor;

    return (

        <div>
            <Col>

                <Image src={img} fluid />
                <h3>{name}</h3>

            </Col>
        </div>


    );
};

export default Doctor;