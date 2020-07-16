import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import './App.css';

export const Projects = () => (
    <div style={{height:"100%"}}>
            <Container>
                <div>
                    <Row>
                        <Col style={{marginTop:"120px", marginBottom:"120px",}}>
                            <p style={{fontSize:"50px", fontWeight:"900"}}>What we've been <br/>upto lately.</p>
                        </Col>
                    </Row>
                    <Row id="projectRow">
                        <Col md lg>
                            <p style={{fontSize:"30px", fontWeight:"500"}}><span style={{color:"#fb7820"}}>Sharing</span> the experience</p>
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
                    <p style={{fontSize:"50px", fontWeight:"900", textAlign:"center", paddingBottom:"50px", color:"#fb7820"}}>Our Projects</p>
                </div>
                
            <section>
                <Row>
                    <Col lg md>
                    <div style={{width:"350px", height:"350px"}}>
                    <img alt="nationalStadium" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Nat_Std01.JPG/1200px-Nat_Std01.JPG" className="image"/>
                    </div>
                    </Col>
                    <Col lg md>
                    <img alt="nationalStadium" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Nat_Std01.JPG/1200px-Nat_Std01.JPG" className="image" />
                    </Col>
                    <Col lg md>
                    <img alt="nationalStadium" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Nat_Std01.JPG/1200px-Nat_Std01.JPG" className="image" />
                    </Col>
                </Row>
                <br/>
                {/*
                <Row>
                    <Col lg md>
                        <div className="card">
                            <div className="image">
                                <img alt="nationalStadium" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Nat_Std01.JPG/1200px-Nat_Std01.JPG"/>
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
                                <img alt="nationalStadium" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Nat_Std01.JPG/1200px-Nat_Std01.JPG"/>
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
                                <img alt="nationalStadium" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Nat_Std01.JPG/1200px-Nat_Std01.JPG"/>
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
                </Row>
                */}
            </section>
        </Container>
    </div>
)
