import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import './App.css';

export const Projects = () => (

    <div>
        <Container>
            <Row>
                <Col style={{marginTop:"120px", marginBottom:"120px",}}>
                    <p style={{fontSize:"50px", fontWeight:"900"}}>What we've been <br/>upto lately.</p>
                </Col>
            </Row>
            <Row id="projectRow">
                    <Col md lg>
                        <p style={{fontSize:"30px", fontWeight:"500"}}><span style={{color:"#fb7840"}}>Sharing</span> the experience</p>
                        <div>
                            <p style={{fontSize:"20px", fontWeight:"200"}}>
                                We think it's important to take a step back at the end of every project and show others what we've built and what we have learned.
                            </p>
                        </div>
                    </Col>
                    <Col md lg>
                        <p style={{fontSize:"30px", fontWeight:"500"}}>This is our legacy</p>
                        <div>
                            <p style={{fontSize:"20px", fontWeight:"200"}}>
                                The web is such a fast moving medium that we feel it's crucial to immortalize our projects in the form of case studies.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div id="wrapperVS1">
            <Container>
                <Row>
                    <Col lg md>
                        <div id="projectVS1">
                            <Container>
                                <p style={{fontSize:"25px", fontWeight:"250", color:"#fb7840"}}>06 - Blue Lagoon</p>
                                <p style={{fontSize:"30px", fontWeight:"400"}} id="textVS1">Going Deep with<br/>Blue Lagoon</p>
                                <p style={{fontSize:"20px", fontWeight:"100"}}>The skilful Jón Frímannsson of Jónfrí & Co. was responsible for the stunning pixels that we were tasked with turning into a technical masterpiece—a website for the Blue Lagoon.</p>
                            </Container>
                        </div>
                    </Col>
                    <Col md lg>
                        <div>
                            <img  id="imgVS1" src="https://images.wallpaperscraft.com/image/office_desks_computers_style_modern_39302_1920x1080.jpg" alt="image"/>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>

            <div id="wrapperVS1">
            <Container>
                <Row>
                    <Col md lg>
                        <div>
                            <img  id="imgVS1" src="https://images.wallpaperscraft.com/image/office_desks_computers_style_modern_39302_1920x1080.jpg" alt="image"/>
                        </div>
                    </Col>
                    <Col lg md>
                        <div id="projectVS1">
                            <Container>
                                <p style={{fontSize:"25px", fontWeight:"250", color:"#fb7840"}}>06 - Blue Lagoon</p>
                                <p style={{fontSize:"30px", fontWeight:"400"}} id="textVS1">Going Deep with<br/>Blue Lagoon</p>
                                <p style={{fontSize:"20px", fontWeight:"100"}}>The skilful Jón Frímannsson of Jónfrí & Co. was responsible for the stunning pixels that we were tasked with turning into a technical masterpiece—a website for the Blue Lagoon.</p>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
)
