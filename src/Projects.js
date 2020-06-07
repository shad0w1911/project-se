import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import './App.css';
import './Projects.css';

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
                                <img src="https://cdn.pixabay.com/photo/2020/05/26/15/42/eagle-5223559_960_720.jpg"/>
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

                    <Col lg md>
                        <div className="card">
                            <div className="image">
                                <img src="https://cdn.pixabay.com/photo/2020/05/28/19/01/daisies-5232284_960_720.jpg"/>
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

                    <Col lg md>
                        <div className="card">
                            <div className="image">
                                <img src="https://cdn.pixabay.com/photo/2020/06/01/08/46/water-5245722_960_720.jpg"/>
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
