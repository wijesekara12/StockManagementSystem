import { Navbar, Container, Nav } from 'react-bootstrap';
import NavLink from "react-router-dom/es/NavLink";
import {Link} from "react-router-dom";
import {useEffect} from "react";

const BranchNavBar = () => {

    return(
        <div className="BranchNavBar">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Link className="NavItem" to="/branch">Stock</Link>
                        <Link className="NavItem" to="/add-branch">Add Stock</Link>
                        <Link className="NavItem" to="#">Export Monthly</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default BranchNavBar;