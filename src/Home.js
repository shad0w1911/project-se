import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Container } from "react-bootstrap";
import image1 from './assets/home/01.jpg';
import image2 from './assets/home/02.jpg';
import image3 from './assets/home/03.jpg';

export const Home = () => (
        <div>
            <div>
                <Carousel autoPlay>
                    <Carousel.Item>
                        <div className="img-gradient" >
                            <img className="d-block w-100 carouselImage" alt="First slide" width="100%" src={image1}/>
                        </div>
                        <Carousel.Caption className = "transparentBg">
                            <h3>First slide label</h3>
                            <p className="SEorange">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img-gradient">
                            <img className="d-block w-100 carouselImage" alt="Second slide" width="100%" src={image2}/>
                        </div>
                        <Carousel.Caption className = "transparentBg" >
                            <h3 > Second slide label </h3>
                            <p className = "SEorange" > Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="img-gradient">
                            <img className="d-block w-100 carouselImage" alt="Third slide" width="100%" src={image3}/>
                        </div>
                        <Carousel.Caption className="transparentBg">
                            <h3>Third slide label</h3>
                            <p className="SEorange"> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
                            <p style={{textAlign: "center", fontWeight: "100"}}>
                                Sarwar Enterprises has a very efficient & professional setup with dedicated units of demolition, civil & plumbing works, wooden & metal works, electrical, lain & A/Cs works,
                                aluminium, fire-fighting, medical-gases glass and all other related general works.
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
                                        With a vast range of facilities, from the developments of basic concept to the high quality fabrication & construction work, electrical mechanical and plumbing, fire-fighting, medical-gases work.
                                        This firm is posied to fulfill any project all over the Pakistan.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="img-gradient" >
                        <img src="https://wallpaperplay.com/walls/full/3/a/e/77868.jpg" alt="office" height="700px" className="img-fluid"/>
                    </div>
                </Container>
            </div>
        </div>
)