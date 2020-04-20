import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const styles= styled.div`

    .Navbar-brand, .Navbar-Nav .Nav-Item .Nav-Link  {
        color: #fff;

        "&:hover":{
            color:#fb7840;
        }
    }

    .Navbar-Toggle-icon  {
        background-image: url("data:image/svg+xml;");
        color:#fff;
    }
`;
export const NavigationBar = () => (
    <styles>
        <Navbar variant="dark" expand="lg" sticky="top" style={{backgroundColor:'#000', color:'#fff', borderBottom:'1px solid #fb7840'}}>
            <Navbar.Brand href="/" style={{fontSize:'24px', fontWeight:'10em'}}>SARWAR ENTERPRISES</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggler"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">HOME</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/About">ABOUT</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Projects">PROJECTS</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Partners">PARTNERS</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Contact">CONTACT</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </styles>
)