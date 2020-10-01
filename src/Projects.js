import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import './App.css';
// import dhaOasis from './assets/dhaOasis.jpg';
// import nationalStadium from './assets/nationalStadium.jpg';
// import crescentSteel from './assets/cresentSteel.jpg';
// import kict from './assets/kict.jpg';
import Example from './modal';

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
                
                    {/* <Row>
                        <Col lg md>
                            <img alt="nationalStadium" src={nationalStadium} className="image"/>
                            <div class="projectHolder">
                                <h4 style={{textAlign:"center"}}>National Stadium</h4>
                                <h6 style={{textAlign:"center"}}>Our Services</h6>
                                <p style={{marginLeft:"10px"}}>
                                    <i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Wiring & Transformer Installation <br/>
                                    <i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Cable Laying <br/>
                                    <i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> General Wiring <br/>
                                </p>
                            </div>
                        </Col>
                        <Col lg md>
                            <img alt="crescentSteel" src={crescentSteel} className="image" />
                            <div class="projectHolder">
                                <h4 style={{textAlign:"center"}}>Crescent Steel Hostel</h4>
                                <h6 style={{textAlign:"center"}}>Our Services</h6>
                                <p style={{marginLeft:"10px"}}>
                                    <i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing & Sanitary Work <br/>
                                    <i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fire-fighting System <br/>
                                    <i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Booster Centrifugal Pump <br/>
                                </p>
                            </div>
                        </Col>
                        <Col lg md>
                            <img alt="nationalStadium" src={kict} className="image" />
                            <div class="projectHolder">
                                <h4 style={{textAlign:"center"}}>KICT Marine Building</h4>
                                <h6 style={{textAlign:"center"}}>Our Services</h6>
                                <p style={{marginLeft:"10px"}}>
                                    <i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing & Sanitary Work <br/>
                                    <i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fire-fighting System <br/>
                                    <i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Booster Centrifugal Pump <br/>
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <br/>
                    <p><hr style={{color:"#fb7820", border:"1px solid #fb7820"}}/></p>
                    <br/>
                    */}
                </section>
            </Container>
            <Example />
    </div>
)
