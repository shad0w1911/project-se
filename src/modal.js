/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import { Button, Modal, Row, Col, Container } from 'react-bootstrap';
import './project.css';
import dhaOasis from './assets/dhaOasis.jpg';
import nationalStadium from './assets/nationalStadium.jpg';
import crescentSteel from './assets/cresentSteel.jpg';
import kict from './assets/kict.jpg';
import './App.css';

export default function Example() {
    const [showModal1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [showModal2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [showModal3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [showModal4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [showModal5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const [showModal6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    return (
        <div>
            <Container>
            <Modal show={showModal1} onHide={handleClose1}>
                <Modal.Header>
                <Modal.Title>National Stadium</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Wiring & Transformer Installation <br/>
                        <i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Cable Laying <br/>
                        <i class="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> General Wiring <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose1}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal2} onHide={handleClose2}>
                <Modal.Header>
                <Modal.Title>Modal 2 heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Text Here</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose2} className="animated-button victoria-four">
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal3} onHide={handleClose3}>
                <Modal.Header>
                <Modal.Title>Modal 3 heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Text Here</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose3}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal4} onHide={handleClose4}>
                <Modal.Header>
                <Modal.Title>Modal 4 heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Text Here</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose4}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal5} onHide={handleClose5}>
                <Modal.Header>
                <Modal.Title>Modal 4 heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Text Here</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose5}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal6} onHide={handleClose6}>
                <Modal.Header>
                <Modal.Title>Modal 4 heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Text Here</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose6}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            

            <Row>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image" src={nationalStadium} alt="pic"/>
                        <p className="title">National Stadium</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow1}> BUTTON </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image" src={dhaOasis} alt="pic"/>
                        <p className="title">DHA City Karachi 
                        (DHA Oasis Farmhouses)</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow2}> BUTTON </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image" src={crescentSteel} alt="pic"/>
                        <p className="title">Cresent Steel</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow3}> BUTTON </a></div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image" src={kict} alt="pic"/>
                        <p className="title">KICT Marine Building</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow4}> BUTTON </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image" src={dhaOasis} alt="pic"/>
                        <p className="title">DHA City Karachi 
                        (DHA Oasis Farmhouses)</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow5}> BUTTON </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image" src={crescentSteel} alt="pic"/>
                        <p className="title">Cresent Steel</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow6}> BUTTON </a></div>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
}