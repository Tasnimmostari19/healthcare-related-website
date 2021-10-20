import React from 'react';
import { Row } from 'react-bootstrap';
import d1 from '../../images/Doctor/d1.jpg';
import d2 from '../../images/Doctor/d2.jpg';
import d3 from '../../images/Doctor/d3.jpg';
import d4 from '../../images/Doctor/d4.jpg';
import Doctor from '../Doctor/Doctor';

const doctors = [
    { id: 1, name: 'Charls Smith', img: d1 },
    { id: 1, name: 'Anjelina Haque', img: d2 },
    { id: 1, name: 'Robert Smith', img: d3 },
    { id: 1, name: 'Peri Watson', img: d4 }
]


const Doctors = () => {
    return (
        <div id='doctors'>
            <br />
            <br />
            <h2>Doctors</h2>
            <Row xs={2} md={4} className="g-4 m-4">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }

            </Row>

        </div>
    );
};

export default Doctors;