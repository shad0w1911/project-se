import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
    faMapSigns,
    faPhone,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';

export const Contact = () => ( <
    div className = "row"
    style = {
        {
            margin: '1em'
        }
    } >
    <
    div className = "col-lg"
    style = {
        {
            backgroundImage: 'URL(https://images.pexels.com/photos/3105060/pexels-photo-3105060.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
    } >
    <
    div style = {
        {
            backgroundColor: 'rgba(255,0,0,0)',
            marginLeft: '1em',
            marginTop: '1em',
            display: 'Block'
        }
    } >
    <
    div style = {
        {
            backgroundColor: 'rgba(255,0,0,0)',
            margin: '40px'
        }
    } >
    <
    p > < span > < FontAwesomeIcon icon = {
        faMapSigns
    }
    size = "lg"
    style = {
        {
            fontSize: '30px'
        }
    }
    /></span >
    <
    span style = {
        {
            marginLeft: '40px',
            fontSize: '30px',
            color: '#fb7840',
            fontWeight: '200px'
        }
    } > Address < /span></p > < br / >
    <
    p style = {
        {
            marginLeft: '10px',
            fontSize: '18px'
        }
    } > Floor - 10, Glass Tower, abc street, USA < /p> <
    /div> <
    div style = {
        {
            backgroundColor: 'rgba(255,0,0,0)',
            margin: '40px'
        }
    } >
    <
    p > < span > < FontAwesomeIcon icon = {
        faPhone
    }
    size = "lg"
    style = {
        {
            fontSize: '30px'
        }
    }
    /></span >
    <
    span style = {
        {
            marginLeft: '40px',
            fontSize: '30px',
            color: '#fb7840',
            fontWeight: '200px'
        }
    } > Let 's Talk</span></p><br/> <
    p style = {
        {
            marginLeft: '10px',
            fontSize: '18px'
        }
    } > +123 - 7896 - 1798 < br / > +321 - 6987 - 8971 < /p> <
    /div> <
    div style = {
        {
            backgroundColor: 'rgba(255,0,0,0)',
            margin: '40px'
        }
    } >
    <
    p > < span > < FontAwesomeIcon icon = {
        faEnvelope
    }
    size = "lg"
    style = {
        {
            fontSize: '30px'
        }
    }
    /></span >
    <
    span style = {
        {
            marginLeft: '40px',
            fontSize: '30px',
            color: '#fb7840',
            fontWeight: '200px'
        }
    } > General Support < /span></p > < br / >
    <
    p style = {
        {
            marginLeft: '10px',
            fontSize: '18px'
        }
    } > example @example.com < br / > example2 @example.com < /p> <
    /div> <
    /div> <
    /div> <
    div className = "col-lg" >
    <
    div style = {
        {
            margin: '0.5em'
        }
    } >
    <
    h1 > Contact Us < /h1> <
    Form >
    <
    Form.Group controlId = "exampleForm.ControlInput1" >
    <
    Form.Label > Enter Your Name < /Form.Label> <
    Form.Row >
    <
    Col >
    <
    Form.Control placeholder = "First name" / >
    <
    /Col> <
    Col >
    <
    Form.Control placeholder = "Last name" / >
    <
    /Col> <
    /Form.Row> <
    /Form.Group> <
    Form.Group controlId = "exampleForm.ControlSelect1" >
    <
    Form.Label > Enter Email address < /Form.Label> <
    Form.Control type = "email"
    placeholder = "example@example.com" / >
    <
    /Form.Group> <
    Form.Group controlId = "exampleForm.ControlSelect1" >
    <
    Form.Label > Enter Phone Number < /Form.Label> <
    Form.Control type = "email"
    placeholder = "+92-3001234567" / >
    <
    /Form.Group> <
    Form.Group controlId = "exampleForm.ControlTextarea1" >
    <
    Form.Label > Message < /Form.Label> <
    Form.Control as = "textarea"
    rows = "5"
    placeholder = "Your Message" / >
    <
    /Form.Group> <
    Button style = {
        {
            backgroundColor: '#fb7840',
            color: '#fff',
            border: '1px solid #fb7840',
            padding: '10px',
            width: '100%'
        }
    } > Submit < /Button> <
    /Form> <
    /div> <
    /div> <
    /div>

)