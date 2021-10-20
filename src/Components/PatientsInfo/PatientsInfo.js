import React from 'react';
import './PatientsInfo.css'

const PatientsInfo = () => {
    return (
        <div>
            <h2>Patients Info</h2>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <form class="d-flex form-style">
                        <input class="form-control me-2" type="search" placeholder="Type Patient-id" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default PatientsInfo;