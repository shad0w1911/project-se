import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Container } from "react-bootstrap";
import image1 from './assets/home/electrical.jpg';
import image2 from './assets/home/02.jpg';
import image3 from './assets/home/plumbing.jpg';
import home from './assets/home/home.jpg';

export const Home = () => (
        <div>
            <div>
                <Carousel autoPlay>
                    <Carousel.Item>
                        <div className="img-gradient img-gradient-overlay" >
                            <img className="d-block w-100 carouselImage" alt="First slide" width="100%" src={image1}/>
                        </div>
                        <Carousel.Caption className = "transparentBg">
                            <h3 className="SEorange"> Electrical Work </h3>
                            <p style={{fontSize:"20px", fontWeight:"200"}}> Our services includes installation, testing and commissioning of electric supply internal and external & also electric material supply.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img-gradient img-gradient-overlay">
                            <img className="d-block w-100 carouselImage" alt="Second slide" width="100%" src={image2}/>
                        </div>
                        <Carousel.Caption className = "transparentBg" >
                            <h3 className = "SEorange"> Civil Work </h3>
                            <p style={{fontSize:"20px", fontWeight:"200"}}> Our civil work includes Construction of Roads, Culverts, Retaining Structures, Buildings, Boundary Walls, Fencing, Design and Site Development.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img-gradient img-gradient-overlay">
                            <img className="d-block w-100 carouselImage" alt="Third slide" width="100%" src={image3}/>
                        </div>
                        <Carousel.Caption className="transparentBg">
                            <h3 className="SEorange"> Plumbing </h3>
                            <p style={{fontSize:"20px", fontWeight:"200"}}> Our services includes installation, testing and commissioning of water supply system, pressurized system, external rain water system, irrigation & sprinkler system. SEL offers following services to its clients.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <Container fluid>
                    <div id = "aboutFD">
                        <Row >
                            <Col lg md>
                                <h1 style={{textAlign: "center"}}>Sarwar Enterprises is a team of experts that strive for <span style={{color: "#fb7840"}}>perfection</span>.</h1>
                            </Col>
                            <Col lg md>
                            <p style={{textAlign: "center", fontWeight: "100", fontSize:"18px"}}>
                                Sarwar Enterprises has a very efficient & professional setup with dedicated units of demolition, civil & plumbing works, wooden & metal works, electrical, lain & A/Cs works,
                                aluminium, fire-fighting and all other related general works.
                            </p>
                            </Col>
                        </Row>
                    </div>
                    <br/>
                    <Container id="aboutCont">
                        <div>
                            <Row>
                                <Col lg md>
                                    <p style={{fontSize: "40px", fontWeight: "400", color: "#fb7840"}}>What we do</p>
                                </Col>
                                <Col lg md>
                                    <p style={{fontSize: "20px",fontWeight: "300"}}>
                                        With a vast range of facilities, from the developments of basic concept to the high quality fabrication & construction work, civil, electrical, mechanical and plumbing, fire-fighting.
                                        This firm is posied to fulfill any project all over the Pakistan.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="img-gradient" >
                        <img src={home} alt="office" height="700px" className="img-fluid"/>
                    </div>
                </Container>
            </div>
        </div>
)