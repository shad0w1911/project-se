import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Container } from "react-bootstrap";

export const Home = () => (
    <div>
        <div>
            <Carousel autoPlay>
                <Carousel.Item>
                    <div className="img-gradient" >
                        <img className="d-block w-100 carouselImage" alt="First slide" width="100%" src="https://c.tribune.com.pk/2019/09/2068476-DevelopmentprojectPHOTOMOHAMMADNOMANEXPRESS-1569816429.jpg"/>
                    </div>
                    <Carousel.Caption className = "transparentBg">
                        <h3>First slide label</h3>
                        <p className="SEorange">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-gradient">
                        <img className="d-block w-100 carouselImage" alt="Third slide" width="100%" src="https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'"/>
                    </div>
                    <Carousel.Caption className = "transparentBg" >
                        <h3 > Second slide label </h3>
                        <p className = "SEorange" > Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-gradient">
                        <img className="d-block w-100 carouselImage" alt="Third slide" width="100%" src="https://images.pexels.com/photos/116832/pexels-photo-116832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                    </div>
                    <Carousel.Caption className="transparentBg">
                        <h3>Third slide label</h3>
                        <p className="SEorange"> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    {/*************************************/}

        <div>
            <Container fluid>
                <div id = "aboutFD">
                    <Row >
                        <Col lg md>
                            <h1 style={{textAlign: "center"}}>Nine dedicated developers that strive for <span style={{color: "#fb7840"}}>perfection</span>.</h1>
                        </Col>
                        <Col lg md>
                        <p style={{textAlign: "center", fontWeight: "100px"}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s.
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
                                <p style={{fontSize: "20px", fontWeight: "300"}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className="img-gradient" >
                    <img src="https://wallpaperplay.com/walls/full/3/a/e/77868.jpg" height="700px" className="img-fluid"/>
                </div>
            </Container>
        </div>
    </div>
)