import React from 'react';
import { Row, Col, Container } from "react-bootstrap";

export const About = () => (
    <div>
        <Container fluid>
            <div style={{paddingTop:"150px", paddingBottom:"150px"}}>
                <Row>
                    <Col lg md>
                        <h1 style={{textAlign:"center"}}>Nine dedicated developers that strive for perfection.</h1>
                    </Col>
                    <Col lg md>
                        <p style={{textAlign:"center", fontWeight:"100px"}}>We have a deep passion for developing state of the art software--be it for web, desktop or mobile. We try and stay on top of the game and seek to be leading experts in the field.</p>
                    </Col>
                </Row>
            </div>
            <br/>
            <div className="img-gradient">
                <img src="https://wallpaperplay.com/walls/full/3/a/e/77868.jpg" height="700px" className="img-fluid"/>
            </div>
        </Container>
    </div>   
)