import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import './App.css';
import { Footer } from './components/Footer';

export const Projects = () => (
    <React.Fragment>
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
                <div>
                    <div>
                    <Row>
                        <Col lg md class="projectsDisplay">
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

                        <Col lg md  class="projectsDisplay">
                            <div className="card">
                                <div className="image">
                                    <img alt="bhp" src="https://c.tribune.com.pk/2015/08/933627-BHP-1438926530.jpg"/>
                                </div>
                                <div className="details">
                                    <div className="center">
                                        <h1>BHP Billiton Pakistan</h1>
                                        <p style={{textAlign:"center"}}>Our Services</p>
                                        <div>
                                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Items</p>
                                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Hospital Machines</p>
                                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Wooden & Iron Furniture</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg md  class="projectsDisplay">
                            <div className="card">
                                <div className="image">
                                    <img alt="luckyOne" src="https://karachihighlightshome.files.wordpress.com/2019/01/lucky-one.jpg?w=740"/>
                                </div>
                                <div className="details">
                                    <div className="center">
                                        <h1>Lucky One Karachi</h1>
                                        <p style={{textAlign:"center"}}>Our Services</p>
                                        <div>
                                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Conduits</p>
                                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Speaker Wiring</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    </div>

                    {/* ------------------------------ */}
                    <div style={{marginTop:"20px"}}>
                    <Row>
                        <Col lg md  class="projectsDisplay">
                        <div className="card">
                                <div className="image">
                                    <img alt="dockyard" src="https://2.bp.blogspot.com/_895q5RhHB70/TVKqKwHOwRI/AAAAAAAAAOU/eoqDA6OkavU/s1600/PNS+Khalid+%2528S137%2529++Pakistan+Navy++%2528Agosta+90B%2529.jpg"/>
                                </div>
                                <div className="details">
                                    <div className="center">
                                        <h1>PNS Dockyard Karachi</h1>
                                        <p style={{textAlign:"center"}}>Our Services</p>
                                        <div>
                                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Work</p>
                                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Window Blinds</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg md  class="projectsDisplay">
                            <div className="card">
                                <div className="image">
                                    <img alt="marineBuilding" src="https://www.seanews.com.tr/images/haberler/2015_11/156005/karachi341.jpg"/>
                                </div>
                                <div className="details">
                                    <div className="center">
                                        <h1>KICT Marine Building</h1>
                                        <p style={{textAlign:"center"}}>Our Services</p>
                                        <div>
                                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing & Sanitary Work</p>
                                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fire Fighting System</p>
                                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Rain Water System</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg md  class="projectsDisplay">
                            <div className="card">
                                <div className="image">
                                    <img alt="6MarlaBahria" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5lgGLVHBO0j1De6e8qCzC5Xe_q1qBgDVpyTGNy_zPPA9sD8pH&usqp=CAU"/>
                                </div>
                                <div className="details">
                                    <div className="center">
                                        <h1>6 Marla Homes Bahria Town KHI</h1>
                                        <p style={{textAlign:"center"}}>Our Services</p>
                                        <div>
                                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing & Sanitary Work</p>
                                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Booster Centrifugal Pumps</p>
                                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> External Rain Water System</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    </div>

                </div>
            </Container>
        </div>
        {/*<Footer />*/}
    </React.Fragment>
)
