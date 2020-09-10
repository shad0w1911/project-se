import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMapSigns, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './contact.css';

export const Contact = () => (
    <div className="row" id="mainHolder">
        <div className="col-lg" id="contactIMG">
            <div>
                <div className="textHolder">
                    <p>
                        <span><FontAwesomeIcon icon = {faMapSigns} size = "lg" className="contactFa"/></span>
                        <span className="heading">Address</span></p> <br/>
                    <p className="plainText"> 01 Glass Tower,<br/> Block 10-A, Gulshan-e-Iqbal, <br/> Karachi, Pakistan.</p>
                </div>
                <div className="textHolder">
                    <p>
                        <span><FontAwesomeIcon icon = {faPhone} size = "lg" className="contactFa"/></span>
                        <span className="heading">Let 's Talk</span>
                    </p>
                    <br/>
                    <p  className="plainText"> +92 - 301 - 2265115 <br /> +92 - 333 - 3363642 </p>
                </div>
                <div className="textHolder">
                    <p>
                        <span><FontAwesomeIcon icon = {faEnvelope} size = "lg" className="contactFa"/></span>
                        <span className="heading">General Support </span></p> <br />
                    <p className="plainText"> noman.sarwar@sarwarenterprises.org<br /> rizwan.sarwar@sarwarenterprises.org </p>
                </div>
            </div>
        </div>
        <div className = "col-lg">
            <div id="formHolder">
                <h1>Contact Us</h1>
                <Form>
                    <Form.Group controlId = "exampleForm.ControlInput1" >
                    <Form.Label> Enter Your Name </Form.Label>
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder = "First name"/>
                            </Col>
                            <Col>
                                <Form.Control placeholder = "Last name"/>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group controlId = "exampleForm.ControlSelect1">
                        <Form.Label> Enter Email address </Form.Label>
                        <Form.Control type = "email" placeholder = "example@example.com"/>
                    </Form.Group>
                    <Form.Group controlId = "exampleForm.ControlSelect1">
                        <Form.Label> Enter Phone Number </Form.Label>
                        <Form.Control type = "email" placeholder = "+92-3001234567"/>
                    </Form.Group>
                    <Form.Group controlId = "exampleForm.ControlTextarea1" >
                        <Form.Label > Message </Form.Label>
                        <Form.Control as="textarea" rows="5" placeholder="Your Message"/>
                    </Form.Group>
                    <Button id="contactSub"> Submit </Button>
                </Form>
            </div>
        </div>
    </div>
)