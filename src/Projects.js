import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import './App.css';

export const Projects = () => (

    <div>
        <Container>
            <div>
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
            </div>

            <div>
                <Row>
                    <Col lg md>
                        <div className="card">
                            <div className="image">
                                <img src="https://iqraengineers.com/wp-content/uploads/2017/01/NED-University-of-Engineering-and-Technology.jpg"/>
                            </div>
                            <div className="details">
                                <div className="center">
                                    <h1>NED University of engineering & technology</h1>
                                    <br/>
                                    <p>Services we perfromed at NED University of Engineering & Technology includes provision and installation of IT items and wooden furniture</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg md>
                        <div className="card">
                            <div className="image">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Nat_Std01.JPG/1200px-Nat_Std01.JPG"/>
                            </div>
                            <div className="details">
                                <div className="center">
                                    <h1>National Stadium Karachi</h1>
                                    <p style={{textAlign:"center"}}>Our Services</p>
                                    <div>
                                    <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Work</p>
                                    <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing</p>
                                    <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fire Fighting</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg md>
                        <div className="card">
                            <div className="image">
                                <img src="https://img.dunyanews.tv/news/2019/January/01-21-19/news_big_images/475264_80762715.jpg"/>
                            </div>
                            <div className="details">
                                <div className="center">
                                    <h1>Lorem Ipsum</h1>
                                    <p>loremmipsum adad lorem ipsum adasd</p>
                                    <ul>
                                    <li><a href="#">
                                        <i class="fa fa-github" aria-hidden="true"></i>
                                    </a></li>
                                    <li><a href="">
                                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                                    </a></li>
                                    <li><a href="#">
                                        <i class="fa fa-github" aria-hidden="true"></i>
                                    </a></li>
                                    <li><a href="">
                                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                                    </a></li>
                                    <li><a href="">
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                    </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>

    </div>
)
