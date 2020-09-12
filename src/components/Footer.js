import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Container, Button } from 'react-bootstrap';
import logo from '../assets/SE-logo.png';
import { Nav } from 'react-bootstrap';
import profile from '../assets/profile/profile.pdf';

export const Footer = () => (
    <div id="footer">
        <Container fluid>
        <Row>
            <Col md lg>
            <div id="footerFD">
                <p style={{fontSize:"40px", fontWeight:"500", color:"#fb7840"}}>Got a project?<br/>
                <span style={{fontSize:"30px", fontWeight:"300", color:"#fff"}}>We want to hear about it.</span></p>
                <Button id="footerSub" type="button" onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://shad0w1911.github.io/project-se/#/Contact';
                    }}> Contact Us </Button>
                <div id="footerSD">
                    <Row>
                        <Col lg md id="colF">
                            <Row>
                                <Col-8 md lg>
                                </Col-8>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            </Col>
            <Col md lg>
                <div id="footerFD2">
                    <div>
                        <img src={logo} alt="logo" id="footerLogo"/>
                    </div>
                    <div id="footerSD2">
                        <Row>
                            <Nav id="footerNav" className="ml-auto">
                                <Col sm md lg><Nav.Item><Nav.Link href="https://shad0w1911.github.io/project-se/#/" className="footerNavLink">Home</Nav.Link></Nav.Item></Col>
                                <Col sm md lg><Nav.Item><Nav.Link href="https://shad0w1911.github.io/project-se/#/Services" className="footerNavLink">Services</Nav.Link></Nav.Item></Col>
                                <Col sm md lg><Nav.Item><Nav.Link href={profile} target="_blank" className="footerNavLink">Profile</Nav.Link></Nav.Item></Col>
                                <Col sm md lg><Nav.Item><Nav.Link href="https://shad0w1911.github.io/project-se/#/Contact" className="footerNavLink">Contact</Nav.Link></Nav.Item></Col>
                            </Nav>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>
        <p style={{marginTop:'1em', width:'100%', textAlign:'center'}}>Developed By <span style={{color:'#fb7840'}}>Hassan Uddin Sheikh</span><br/>All Rights Reserved <FontAwesomeIcon icon={faCopyright}/> 2020</p>
        </Container>
    </div>
)