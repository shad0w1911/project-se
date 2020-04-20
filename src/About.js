import React from 'react';
import { Row, Col, Container } from "react-bootstrap";

export const About = () => (
    <div>
        <Container fluid>
            <div id="aboutFD">
                <Row>
                    <Col lg md>
                        <h1 style={{textAlign:"center"}}>Nine dedicated developers that strive for <span style={{color:"#fb7840"}}>perfection</span>.</h1>
                    </Col>
                    <Col lg md>
                        <p style={{textAlign:"center", fontWeight:"100px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </Col>
                </Row>
            </div>
            <br/>
            <div className="img-gradient">
                <img src="https://wallpaperplay.com/walls/full/3/a/e/77868.jpg" height="700px" className="img-fluid"/>
            </div>
            <Container id="aboutCont">
                <div>
                    <Row>
                        <Col lg md>
                            <p style={{fontSize:"40px", fontWeight:"400", color:"#fb7840"}}>What we do</p>
                        </Col>
                        <Col lg md>
                            <p style={{fontSize:"20px", fontWeight:"300"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Container>
    </div>   
)