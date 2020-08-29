import React from 'react';
import { Row, Col, Container } from "react-bootstrap";

export const About = () => (
    <div>
        <Container fluid>
            <div id="aboutFD">
                <Row>
                    <Col lg md>
                        <h1 style={{textAlign:"center"}}>Sarwar Enterprises is a team of experts that strive for <span style={{color:"#fb7840"}}>perfection</span>.</h1>
                    </Col>
                    <Col lg md>
                        <p style={{textAlign:"center", fontWeight:"100px"}}>
                            Sarwar Enterprises has a very efficient & professional setup with dedicated units of demolition, civil & plumbing works, wooden & metal works, electrical, lain & A/Cs works,
                            aluminum, fire-fighting, medical-gases glass and all other related general works.
                        </p>
                    </Col>
                </Row>
            </div>
            <br/>
            <div className="img-gradient">
                <img src="https://wallpaperplay.com/walls/full/3/a/e/77868.jpg" alt="#img" height="700px" className="img-fluid"/>
            </div>
            <Container id="aboutCont">
                <div>
                    <Row>
                        <Col lg md>
                            <p style={{fontSize:"40px", fontWeight:"400", color:"#fb7840"}}>Who we are</p>
                        </Col>
                        <Col lg md>
                            <p style={{fontSize:"20px", fontWeight:"300"}}>
                                Established in mid nineties, as a design consultancy firm, the company is now grown into a fully integrated high quality manufacturer of interior & exterior projects from Turkey.
                            </p>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <Row>
                        <Col lg md>
                            <p style={{fontSize:"40px", fontWeight:"400", color:"#fb7840"}}>What we do</p>
                        </Col>
                        <Col lg md>
                            <p style={{fontSize:"20px", fontWeight:"300"}}>
                                With a vast range of facilities, from the developments of basic concept to the high quality fabrication & construction work, electrical mechanical and plumbing, fire-fighting, medical-gases work. This firm is poised to fulfill any project all over the Pakistan.
                            </p>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <Row>
                        <Col lg md>
                            <p style={{fontSize:"40px", fontWeight:"400", color:"#fb7840"}}>Our Services</p>
                        </Col>
                        <Col lg md>
                            <p style={{fontSize:"20px", fontWeight:"300"}}>
                            With the availability of all related equipments at our factory, our qualified, trained and experience teams of Carpenters, Electricians, Plumbers, Fabricators, Painters and Polishers, speedily manufactures and finishes our designed products. And at the final stage the required teams works on site also.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Container>
    </div>
)