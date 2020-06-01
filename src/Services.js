import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './App.css';

export default function Services() {
    return (
        <div id="aboutFD">
            <Container fluid>
                <Row>
                    <Col md lg id="servicesP">
                        <h1 style={{textAlign:"center"}}>Services We Offer</h1>
                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Work</p>
                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing</p>
                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Mechanical Work</p>
                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fire Fighting</p>
                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Medical Gases</p>
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
    );
}