import React from 'react';
import Banner from '../Banner/Banner';
import Career from '../Career/Career';
import Doctors from '../Doctors/Doctors';


import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>

            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Career></Career>

        </div>
    );
};

export default Home;