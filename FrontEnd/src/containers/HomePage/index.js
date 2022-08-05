import React from 'react';
import { Container, Row } from "react-bootstrap";
import HomeTopBar from '../../components/HomeTopBar';
import HomeFooter from '../../components/HomeFooter';
import OurBranches from '../../components/OurBranches';
import BranchesList from '../../components/BranchesList';

const HomePage = () => {

    return (
        <Container>
            <div>
                <Row><HomeTopBar/></Row>
                <Row><OurBranches/></Row>
                <hr/>
                <Row><BranchesList/></Row>
                <br/>
                <Row><HomeFooter/></Row>
            </div>
        </Container>
    );
}

export default HomePage;