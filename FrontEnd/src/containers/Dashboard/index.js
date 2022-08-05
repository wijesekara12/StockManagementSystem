import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from "react-bootstrap";
import BranchTable from '../../components/BranchTable';

const Dashboard = () => {

    return (
        <Navbar bg="dark" variant="dark" className="Topbar">
            <Container>
                <Navbar.Brand>
                    <h4>
                        {/* <Link to="/dashboard" style={{marginRight: "1rem", textDecoration: "none", color: "#92E0FF", fontFamily: "consolas", fontWeight:"bold"}}>Dashboard</Link> */}
                    </h4>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}




export default Dashboard;