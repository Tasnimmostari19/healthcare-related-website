import React from 'react';
import { Image } from 'react-bootstrap';
import img from '../../images/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Image src={img} fluid />
            <div className="text-block">
                <p>The</p>
                <h2>Physiotherapy </h2>
                <p>Center</p>
            </div>

        </div>
    );
};

export default Banner;