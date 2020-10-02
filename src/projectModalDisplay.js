/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import './App.css';
import dhaOasis from './assets/dhaOasis.jpg';
import nationalStadium from './assets/nationalStadium.jpg';
import crescentSteel from './assets/cresentSteel.jpg';
import kict from './assets/kict.jpg';
import jims from './assets/JIMS.jpg';
import threegc from './assets/3GC.jpg';
import ahmed from './assets/ahmed.jpeg';
import ned from './assets/NED.jpg';
import luckyone from './assets/luckyone.jpg';
import hypestar from './assets/hyperstar.jpg';
import bahria from './assets/bahria.jpg';
import ali from './assets/ali.jpg';
import faisal from './assets/faisal.jpg';
import korangi from './assets/korangi.png';
import bhp from './assets/bhp.jpg';
import fauji from './assets/fauji.jpg';
import solar from './assets/solar.jpg';
import fBank from './assets/fBank.jpg';
import sc from './assets/sc.jpg';
import ksbl from './assets/ksbl.jpg';
import cocacola from './assets/cocacola.jpg';

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

    const [showModal7, setShow7] = useState(false);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);

    const [showModal8, setShow8] = useState(false);
    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);

    const [showModal9, setShow9] = useState(false);
    const handleClose9 = () => setShow9(false);
    const handleShow9 = () => setShow9(true);

    const [showModal10, setShow10] = useState(false);
    const handleClose10 = () => setShow10(false);
    const handleShow10 = () => setShow10(true);

    const [showModal11, setShow11] = useState(false);
    const handleClose11 = () => setShow11(false);
    const handleShow11 = () => setShow11(true);

    const [showModal12, setShow12] = useState(false);
    const handleClose12 = () => setShow12(false);
    const handleShow12 = () => setShow12(true);

    const [showModal13, setShow13] = useState(false);
    const handleClose13 = () => setShow13(false);
    const handleShow13 = () => setShow13(true);

    const [showModal14, setShow14] = useState(false);
    const handleClose14 = () => setShow14(false);
    const handleShow14 = () => setShow14(true);

    const [showModal15, setShow15] = useState(false);
    const handleClose15 = () => setShow15(false);
    const handleShow15 = () => setShow15(true);

    const [showModal16, setShow16] = useState(false);
    const handleClose16 = () => setShow16(false);
    const handleShow16 = () => setShow16(true);

    const [showModal17, setShow17] = useState(false);
    const handleClose17 = () => setShow17(false);
    const handleShow17 = () => setShow17(true);

    const [showModal18, setShow18] = useState(false);
    const handleClose18 = () => setShow18(false);
    const handleShow18 = () => setShow18(true);

    const [showModal19, setShow19] = useState(false);
    const handleClose19 = () => setShow19(false);
    const handleShow19 = () => setShow19(true);

    const [showModal20, setShow20] = useState(false);
    const handleClose20 = () => setShow20(false);
    const handleShow20 = () => setShow20(true);

    const [showModal21, setShow21] = useState(false);
    const handleClose21 = () => setShow21(false);
    const handleShow21 = () => setShow21(true);

    return (
        <div>
            <Modal show={showModal1} onHide={handleClose1}>
                <Modal.Header>
                <Modal.Title>National Stadium</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Wiring & Transformer Installation <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Cable Laying <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> General Wiring <br/>
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
                <Modal.Title>DHA City Karachi (DHA Oasis Farmhouses)</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Conduits <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Wiring <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Civil Works <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing & Sanitary <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Booster Centrifugal Pumps <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fire Fighting System <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> External Rain Water System <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose2} className="animated-button victoria-four">
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal3} onHide={handleClose3}>
                <Modal.Header>
                <Modal.Title>Cresent Steel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Booster Centrifugal Pumps <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fire Fighting System <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> External Rain Water System <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose3} className="animated-button victoria-four">
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal4} onHide={handleClose4}>
                <Modal.Header>
                <Modal.Title>KICT Marine Building</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing & Sanitary <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Rain Water System <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fire Fighting System <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose4}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal5} onHide={handleClose5}>
                <Modal.Header>
                <Modal.Title>NED University Of Engineering & Technology</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> IT Items <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Wooden Furniture <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose5}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal6} onHide={handleClose6}>
                <Modal.Header>
                <Modal.Title>Jacobabad Institute of Management Science</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fire-Fighting Work <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Medical Gases Work <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Oxygenerator <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Air Compressor <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Irrigation System <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose6}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal7} onHide={handleClose7}>
                <Modal.Header>
                <Modal.Title>BHP Billiton Pakistan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Items <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Hospital Machines <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Wooden & Iron Furniture <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose7}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal8} onHide={handleClose8}>
                <Modal.Header>
                <Modal.Title>3G Construction</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Conduits, Main Cable, Light Fixtures, Switch Sockets,
                        SMDM LV Panels Installation, CCTV Wiring, Installation of Cable Tray, complete wiring of apartments & service area. <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose8}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal9} onHide={handleClose9}>
                <Modal.Header>
                <Modal.Title>Ahmed Electrical</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Items <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> CCTV <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Main Cable <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Apartment Wiring Panels <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Civil Maintenance Works <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose9}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal10} onHide={handleClose10}>
                <Modal.Header>
                <Modal.Title>Lucky One</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Conduits <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Speaker Wiring <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose10}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal11} onHide={handleClose11}>
                <Modal.Header>
                <Modal.Title>Dolmen Hyperstar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Items <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Speaker Wiring <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> PVC & GI Conduits <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fire Alarm System <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose11}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal12} onHide={handleClose12}>
                <Modal.Header>
                <Modal.Title>Bahria Town</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Items <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Cables <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> DBs <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Light Fixtures <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Civil Maintenance Works <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose12}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal13} onHide={handleClose13}>
                <Modal.Header>
                <Modal.Title>Ali Malik Builders</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Conduits <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Wiring <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> DB Termination <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Light Fixtures <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Switch Sheets <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Main Cable Installation <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose13}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal14} onHide={handleClose14}>
                <Modal.Header>
                <Modal.Title>Faisal Malik Builders</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Conduits <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Wiring <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> DB Termination <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Light Fixtures <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Switch Sheets <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Main Cable Installation <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose14}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal15} onHide={handleClose15}>
                <Modal.Header>
                <Modal.Title>Korangi Creek Industrial Park</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Items <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Wiring <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Cable Laying <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose15}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal16} onHide={handleClose16}>
                <Modal.Header>
                <Modal.Title>Fauji Meat Limited Slaughter House & Meat Complex</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Supply Electrical Items <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Wiring <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> External Sewerage <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> External Water Supply <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Boosting System <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Pumping Station <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Electrical Chamber <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Main Cabling <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Cable Tray Works <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Cable Laying <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Civil Maintenance Works <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose16}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal17} onHide={handleClose17}>
                <Modal.Header>
                <Modal.Title>Solar All in One</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{marginLeft:"10px"}}>
                        <h4>Specifications 30/60/90/120w</h4>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Solar panels converts solar energy into electricity <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Day Night Sensor <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Motion Sensor <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> 10-12 hours battery backup <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Auto Charging <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Waterproof IP65 <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Pumping Station <br/>
                        <br />
                        <h4>Details</h4>
                        Supply in Bannu Cantt, Bajour border, Mohmand Tribal District, Lower Dir.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose17}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal18} onHide={handleClose18}>
                <Modal.Header>
                <Modal.Title>Faisal Bank Model Town Karachi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing & Sanitary Work <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose18}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal19} onHide={handleClose19}>
                <Modal.Header>
                <Modal.Title>Standard Chartered</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>North Nazimabad KHI</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing & Sanitary Work <br/>
                    </p>
                    <h4>65 Gulberg Lahore</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing & Sanitary Work <br/>
                    </p>
                    <h4>29 Gulberg Lahore</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing & Sanitary Work <br/>
                    </p>
                    <h4>Bahria Town RWP</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing & Sanitary Work <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Pumps <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose19}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal20} onHide={handleClose20}>
                <Modal.Header>
                <Modal.Title>Karachi School of Business & Leadership</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Plumbing & Sanitary Work <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Fire Fighting System <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose20}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal21} onHide={handleClose21}>
                <Modal.Header>
                <Modal.Title>Coca Cola Beverages Pakistan Ltd.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{textAlign:"center"}}>Our Services</h4>
                    <p style={{marginLeft:"10px"}}>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Bulk Water Supply Line <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> Connection Chamber K3-Syphon 9 <br/>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{color:"#fb7820"}}></i> HDPE 355mm dia(Approx 16km) <br/>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose21}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            <Row>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={nationalStadium} alt="pic"/>
                        <p className="title">National Stadium</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow1}> Learn More </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={dhaOasis} alt="pic"/>
                        <p className="title">DHA City Karachi</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow2}> Learn More </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={crescentSteel} alt="pic"/>
                        <p className="title">Cresent Steel</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow3}> Learn More </a></div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={kict} alt="pic"/>
                        <p className="title">Karachi International Container Terminal</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow4}> Learn More </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={ned} alt="pic"/>
                        <p className="title">NED University Of Engineering & Technology</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow5}> Learn More </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={jims} alt="pic"/>
                        <p className="title">Jacobabad Institute of Management Science</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow6}> Learn More </a></div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={bhp} alt="pic"/>
                        <p className="title">BHP Billiton Pakistan</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow7}> Learn More </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={threegc} alt="pic"/>
                        <p className="title">3G Construction</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow8}> Learn More </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={ahmed} alt="pic"/>
                        <p className="title">Ahmed Electrical</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow9}> Learn More </a></div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={luckyone} alt="pic"/>
                        <p className="title">Lucky One</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow10}> Learn More </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={hypestar} alt="pic"/>
                        <p className="title">Dolmen Hyperstar</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow11}> Learn More </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={bahria} alt="pic"/>
                        <p className="title">Bahria Town</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow12}> Learn More </a></div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={ali} alt="pic"/>
                        <p className="title">Ali Malik Builders</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow13}> Learn More </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={faisal} alt="pic"/>
                        <p className="title">Faisal Malik Builders</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow14}> Learn More </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={korangi} alt="pic"/>
                        <p className="title">Korangi Creek</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow15}> Learn More </a></div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={fauji} alt="pic"/>
                        <p className="title">Fauji Meat Limited</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow16}> Learn More </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={solar} alt="pic"/>
                        <p className="title">Solar Lights</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow17}> Learn More </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={fBank} alt="pic"/>
                        <p className="title">Faisal Bank</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow18}> Learn More </a></div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={sc} alt="pic"/>
                        <p className="title">Standard Chartered</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow19}> Learn More </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={ksbl} alt="pic"/>
                        <p className="title">Karachi School of Business & Leadership</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow20}> Learn More </a></div>
                    </div>
                </Col>
                <Col lg md>
                    <div className="containerHolder">
                        <img className="image modal-img" src={cocacola} alt="pic"/>
                        <p className="title">Coca Cola Beverages Pakistan Ltd.</p>
                        <div className="overlay"></div>
                        <div className="button"><a onClick={handleShow21}> Learn More </a></div>
                    </div>
                </Col>
            </Row>

        </div>
    );
}