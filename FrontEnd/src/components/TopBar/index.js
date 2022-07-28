import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopBar = () => {
    return(
        <Navbar bg="dark" variant="dark" className="Topbar">
            <Container>
                <Navbar.Brand>
                    <h4>
                        <Link to="/" style={{marginRight: "1rem", textDecoration: "none", color: "#92E0FF", fontFamily: "consolas", fontWeight:"bold"}}>Yo Mart</Link>{' | '}
                        <Link to="/dashboard" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "400"}}>Admin Panel</Link>
                    </h4>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default TopBar;