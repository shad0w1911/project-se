import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
                    <Col md lg id="servicesP">
                    {/*
                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Work</p>
                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing</p>
                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Mechanical Work</p>
                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fire Fighting</p>
                        <p><i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Medical Gases</p>
                        */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}