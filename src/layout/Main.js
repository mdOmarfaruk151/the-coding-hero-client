import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div >
            <Header className=" "></Header>
            <Container className=' dark:bg-black dark:text-white dark:max-w-full  min-w-full'>
            <Row>
                <Col lg="9" >
                <Outlet className=''></Outlet>
                </Col>
                <Col lg='3'>
                <RightSideNav className=""></RightSideNav>
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default Main;