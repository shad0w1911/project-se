import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './App.css';

export default function Services() {
    return (
        <div>

            <div id="aboutFD">
                <Container fluid>
                    <Row>
                        <Col md lg id="servicesP">
                            <h1 style={{textAlign:"center"}}>Services We Offer</h1>
                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Work</p>
                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing</p>
                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Mechanical Work</p>
                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fire Fighting</p>
                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Medical Gases Work</p>
                        </Col>
                        <Col md lg id="servicesP2">
                            <p>
                            <i class="fa fa-quote-left" aria-hidden="true" style={{color:"#fb7820", fontSize:"30px"}}></i> With the availablity of all related equipments at our factory, our qualified, trianed and experience teams of Carpenters, Electricians, Plumbers, Fabricators, Painters and Polishers,
                                speedily manufactures and finishes our designed products. And at the final stage the required teams works on site also.  <i class="fa fa-quote-right" aria-hidden="true"  style={{color:"#fb7820", fontSize:"30px"}}></i>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="wrapperVS1">
                <Container>
                    <Row>
                        <Col md lg>
                            <div>
                                <img  id="imgVS1" src="https://cdn.pixabay.com/photo/2015/12/07/10/55/electric-1080584_960_720.jpg" alt="image"/>
                            </div>
                        </Col>
                        <Col lg md>
                            <div id="projectVS1">
                                <Container>
                                    <p style={{fontSize:"25px", fontWeight:"250", color:"#fb7840"}}>01 - Electrical Work</p>
                                    <p style={{fontSize:"20px", fontWeight:"100"}}>
                                        Our services includes installation, testing and commisioning of electric supply internal and external & also electric material supply.
                                    </p>
                                    <Row>
                                        <Col md lg>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Conduets</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Wiring</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Db Terminations</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Light Fixtures</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Switch Sheets</p>
                                        </Col>
                                        <Col md lg>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Earthing</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Main Cables</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Cable Trays</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> SMBD LV Panels</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> CCTV</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="wrapperVS1">
                <Container>
                    <Row>
                        <Col md lg>
                            <div id="projectVS1">
                                <Container>
                                    <p style={{fontSize:"25px", fontWeight:"250", color:"#fb7840"}}>02 - Plumbing</p>
                                    <p style={{fontSize:"20px", fontWeight:"100"}}>
                                        Our services includes installation, testing and commisioning of water supply system, pressurized system, external rain water system, irrigation & sprinkler system. SEL offers following services to its clients.
                                    </p>
                                    <Row>
                                        <Col md lg>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Drainage, Waste & Vent System</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Commercial Kitchen Plumbing</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Gas Distribution System</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fuel, Oil Storage & Distribution</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Waste Collection & treatement</p>
                                        </Col>
                                        <Col md lg>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Waste & Water Treatement</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Garden Sprinkler System</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Hospital/Clinical Piping</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Domestic Water</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Storm Drainage</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col lg md>
                            <div>
                                <img  id="imgVS1" src="https://cdn.pixabay.com/photo/2017/08/23/10/22/tubing-2672187_960_720.jpg" alt="image"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="wrapperVS1">
                <Container>
                    <Row>
                        <Col md lg>
                            <div>
                                <img  id="imgVS1" src="https://cdn.pixabay.com/photo/2016/05/09/17/26/motor-1381995_960_720.jpg" alt="image"/>
                            </div>
                        </Col>
                        <Col lg md>
                            <div id="projectVS1">
                                <Container>
                                    <p style={{fontSize:"25px", fontWeight:"250", color:"#fb7840"}}>03 - Mechanical Solutions</p>
                                    <p style={{fontSize:"20px", fontWeight:"100"}}>
                                        Our services includes installation of pipes, ducts, equipment, valves, complete HVAC plant rooms, air handling rooms, air conditioning as well as our services includes.
                                    </p>
                                    <Row>
                                        <Col md lg>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Central Heating</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Ventilation System</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Industrial Plant Exhuasts</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Heat Recovery System</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Power & Steam Generating System</p>
                                        </Col>
                                        <Col md lg>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Refrigeration System</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> CO Generation System</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> HVAC System for Clean Rooms</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> HVAC System for CRAC Units</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Mechanical Structure & Foundations</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="wrapperVS1">
                <Container>
                    <Row>
                        <Col md lg>
                            <div id="projectVS1">
                                <Container>
                                    <p style={{fontSize:"25px", fontWeight:"250", color:"#fb7840"}}>04 - Fire Fighting</p>
                                    <p style={{fontSize:"20px", fontWeight:"100"}}>
                                        Our service includes installation of fire fighting equipment in plant rooms and pipes, sprinkler etc required on building floors. Our major services includes.
                                    </p>
                                    <Row>
                                        <Col md lg>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Sprinkler System</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Hyderant System</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fire Supression System</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Commercial Kitchen Fire Fighting System</p>
                                        </Col>
                                        <Col md lg>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Pumping Station</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> External Hyderant System</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> FM Exhaust System</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Automated Zone Check Assembly System</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col lg md>
                            <div>
                                <img  id="imgVS1" src="https://cdn.pixabay.com/photo/2016/09/12/22/38/fire-1665996_960_720.jpg" alt="image"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="wrapperVS1">
                <Container>
                    <Row>
                        <Col md lg>
                            <div>
                                <img  id="imgVS1" src="https://www.tri-techmedical.com/sites/default/files/ez-backfeed_ez-find.jpg" alt="image"/>
                            </div>
                        </Col>
                        <Col lg md>
                            <div id="projectVS1">
                                <Container>
                                    <p style={{fontSize:"25px", fontWeight:"250", color:"#fb7840"}}>05 - Medical Gases Work</p>
                                    <p style={{fontSize:"20px", fontWeight:"100"}}>
                                        Our services includes installation of pipes, equipment, valves as well as our services includes.
                                    </p>
                                    <Row>
                                        <Col md lg>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Medical Gases Piping</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Oxygen Generator</p>
                                        </Col>
                                        <Col md lg>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Vacuum Pumps</p>
                                            <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Medical Equipment</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
}