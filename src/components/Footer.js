import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Container } from 'react-bootstrap';
import logo from '../assets/SE-logo.png' 

export const Footer = () => (
    <div style={{marginTop:'1em', width:'100%'}}>
        <Container fluid>
        <Row>
            <Col md lg>
            <div id="footerFD">
                <p style={{fontSize:"40px", fontWeight:"500", color:"#fb7840"}}>Got a project?<br/>
                <span style={{fontSize:"30px", fontWeight:"300", color:"#fff"}}>We want to hear about it.</span></p>
                <div id="footerSD">
                    <Row>
                        <Col lg md id="colF">
                            <Row>
                                <Col-4 md lg>
                                <p style={{fontSize:"20px", fontWeight:"300"}}> (+789) 132 4657</p>
                                </Col-4>
                                <Col md lg>
                                <p style={{fontSize:"20px", fontWeight:"300"}}>example@example.com</p>
                                </Col>
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
                        <p style={{fontSize:"20px", fontWeight:"300"}}><span>About</span><span>Projects</span><span>Partners</span><span>Contact</span></p>
                    </div>
                </div>
            </Col>
        </Row>
        </Container>
        <p style={{marginTop:'1em', width:'100%', textAlign:'center'}}>Developed By <span style={{color:'#fb7840'}}>Hassan Uddin Sheikh</span><br/>All Rights Reserved <FontAwesomeIcon icon={faCopyright}/> 2020</p>
    </div>
)