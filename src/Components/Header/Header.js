import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">the PHYSIOTHERAPY center</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#career">Career Opportunities</Nav.Link>
                        <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                        <Nav.Link as={Link} to="/patientsinfo">Patients Info</Nav.Link>

                        <Navbar.Text>
                            {user?.email ?
                                <Button onClick={logOut} variant="light">Logout Signed in as: <a href="#login">{user.email}</a></Button> : (
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>

                                )

                            }
                        </Navbar.Text>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;