import React,{ useRef } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';
import civil from './assets/civil.jpg';
import electrical from './assets/electrical.jpg';
import fireFighting from './assets/fireFighting.jpg';
import mechanical from './assets/mechanical.jpg';
import plumbing from './assets/plumbing.jpg';
import medicalGases from './assets/medicalGases.jpg';

export default function Services() {

    const civilWork = useRef();
    const electricalWork = useRef();
    const plumbingWork = useRef();
    const mechanicalWork = useRef();
    const fireFightingWork = useRef();
    const medicalGasesWork = useRef();

    function civilOnClick() {
        civilWork.current.scrollIntoView({ behavior: 'smooth' })
    }
    function electricalOnClick() {
        electricalWork.current.scrollIntoView({ behavior: 'smooth' })
    }
    function plumbingOnClick() {
        plumbingWork.current.scrollIntoView({ behavior: 'smooth' })
    }
    function mechanicalOnClick() {
        mechanicalWork.current.scrollIntoView({ behavior: 'smooth' })
    }
    function fireFightingOnClick() {
        fireFighting.current.scrollIntoView({ behavior: 'smooth' })
    }
    function medicalGasesOnClick() {
        medicalGasesWork.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
            <div>
                <div id="aboutFD">
                    <Container fluid>
                        <Row>
                            <Col md lg id="servicesP">
                                <h1 style={{textAlign:"center"}}>Services We Offer</h1>
                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:'#fb7820'}}></i> <button className="servicesButton" onClick={civilOnClick}>Civil Work</button></p>
                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:'#fb7820'}}></i> <button className="servicesButton" onClick={electricalOnClick}>Electrical Work</button></p>
                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:'#fb7820'}}></i> <button className="servicesButton" onClick={plumbingOnClick}>Plumbing</button></p>
                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:'#fb7820'}}></i> <button className="servicesButton" onClick={mechanicalOnClick}>Mechanical Work</button></p>
                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:'#fb7820'}}></i> <button className="servicesButton" onClick={fireFightingOnClick}>Fire Fighting</button></p>
                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:'#fb7820'}}></i> <button className="servicesButton" onClick={medicalGasesOnClick}>Medical Gases Work</button></p>
                            </Col>
                            <Col md lg id="servicesP2">
                                <p>
                                <i class="fa fa-quote-left" aria-hidden="true" style={{color:"#fb7820", fontSize:"30px"}}></i> With the availability of all related equipments at our factory, our qualified, trained and experience teams of Carpenters, Electricians, Plumbers, Fabricators, Painters and Polishers,
                                    speedily manufactures and finishes our designed products. And at the final stage the required teams works on site also.  <i class="fa fa-quote-right" aria-hidden="true"  style={{color:"#fb7820", fontSize:"30px"}}></i>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="wrapperVS1" id="civilWork" ref={civilWork}>
                    <Container>
                        <Row>
                            <Col lg md>
                                <div className="projectVS1">
                                    <Container>
                                        <p style={{fontSize:"25px", fontWeight:"250", color:"#fb7840"}}>01 - Civil Work</p>
                                        <Row>
                                            <Col md lg>
                                                <p style={{fontSize:"20px", fontWeight:"100", color:"#fb7840"}}>Construction</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Construction of Roads, Culverts and Retaining structures</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Construction of Water supply / Sewerage</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Construction of  Buildings</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Boundary Walls / Fencing</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Ancillary Works</p>
                                            </Col>
                                            <Col md lg>
                                                <p style={{fontSize:"20px", fontWeight:"100", color:"#fb7840"}}>Architecture / Designing</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Design and Site Development</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Structural Design</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical / Plumbing/ Communication System Design</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                            <Col md lg>
                                <div>
                                    <img  className="imgVS1" src={civil} alt="civil work"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="wrapperVS1" id="electricalWork" ref={electricalWork}>
                    <Container>
                        <Row>
                            <Col md lg>
                                <div>
                                    <img  className="imgVS1" src={electrical} alt="electrical work"/>
                                </div>
                            </Col>
                            <Col lg md>
                                <div className="projectVS1">
                                    <Container>
                                        <p style={{fontSize:"25px", fontWeight:"250", color:"#fb7840"}}>02 - Electrical Work</p>
                                        <p style={{fontSize:"20px", fontWeight:"100"}}>
                                            Our services includes installation, testing and commissioning of electric supply internal and external & also electric material supply.
                                        </p>
                                        <Row>
                                            <Col md lg>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Conduits</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Wiring</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Db Terminations</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Light Fixtures</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Switch Sheets</p>
                                            </Col>
                                            <Col md lg>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Earthing</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Main Cables</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Cable Trays</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> SMDB LV Panels</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> CCTV</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="wrapperVS1" id="plumbingWork" ref={plumbingWork}>
                    <Container>
                        <Row>
                            <Col md lg>
                                <div className="projectVS1">
                                    <Container>
                                        <p style={{fontSize:"25px", fontWeight:"250", color:"#fb7840"}}>03 - Plumbing</p>
                                        <p style={{fontSize:"20px", fontWeight:"100"}}>
                                            Our services includes installation, testing and commissioning of water supply system, pressurized system, external rain water system, irrigation & sprinkler system. SEL offers following services to its clients.
                                        </p>
                                        <Row>
                                            <Col md lg>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Drainage, Waste & Vent System</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Commercial Kitchen Plumbing</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Gas Distribution System</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fuel, Oil Storage & Distribution</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Waste Collection & treatment</p>
                                            </Col>
                                            <Col md lg>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Waste & Water Treatment</p>
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
                                    <img  className="imgVS1" src={plumbing} alt="plumbing"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="wrapperVS1" id="mechanicalWork" ref={mechanicalWork}>
                    <Container>
                        <Row>
                            <Col md lg>
                                <div>
                                    <img  className="imgVS1" src={mechanical} alt="Mechanical"/>
                                </div>
                            </Col>
                            <Col lg md>
                                <div className="projectVS1">
                                    <Container>
                                        <p style={{fontSize:"25px", fontWeight:"250", color:"#fb7840"}}>04 - Mechanical Solutions</p>
                                        <p style={{fontSize:"20px", fontWeight:"100"}}>
                                            Our services includes installation of pipes, ducts, equipment, valves, complete HVAC plant rooms, air handling rooms, air conditioning as well as our services includes.
                                        </p>
                                        <Row>
                                            <Col md lg>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Central Heating</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Ventilation System</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Industrial Plant Exhausts</p>
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

                <div className="wrapperVS1" id="fireFighting" ref={fireFightingWork}>
                    <Container>
                        <Row>
                            <Col md lg>
                                <div className="projectVS1">
                                    <Container>
                                        <p style={{fontSize:"25px", fontWeight:"250", color:"#fb7840"}}>05 - Fire Fighting</p>
                                        <p style={{fontSize:"20px", fontWeight:"100"}}>
                                            Our service includes installation of fire fighting equipment in plant rooms and pipes, sprinkler etc required on building floors. Our major services includes.
                                        </p>
                                        <Row>
                                            <Col md lg>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Sprinkler System</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Hydrant System</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fire Suppression System</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Commercial Kitchen Fire Fighting System</p>
                                            </Col>
                                            <Col md lg>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Pumping Station</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> External Hydrant System</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> FM Exhaust System</p>
                                                <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Automated Zone Check Assembly System</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                            <Col lg md>
                                <div>
                                    <img className="imgVS1" src={fireFighting} alt="firefighting"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="wrapperVS1" id="medicalGasesWork" ref={medicalGasesWork}>
                    <Container>
                        <Row>
                            <Col md lg>
                                <div>
                                    <img  className="imgVS1" src={medicalGases} alt="medical gases"/>
                                </div>
                            </Col>
                            <Col lg md>
                                <div className="projectVS1">
                                    <Container>
                                        <p style={{fontSize:"25px", fontWeight:"250", color:"#fb7840"}}>06 - Medical Gases Work</p>
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